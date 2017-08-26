import {Component} from '@angular/core';
import { Http, Headers} from '@angular/http';
import { Subscription } from 'rxjs/Subscription';

import { environment } from '../../../environments/environment';

import {UserService} from '../../core/service/user.service';
import {User} from '../../core/user';

import { Student } from './student';
@Component({
  selector: 'student-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})

export class OptionComponent {

  optionlist: String[]=["AERONAUTIQ","C2Syst2EM","ENERG","Intensci","IPROD","MATHAPPLI","MATEPRO","MDBIT","MSM","OCEAN","PHYCITE","PROPULSION","ROBOTIQUE","RV","SANTE","SIGMA","INFO","GI","URBANISTIC"];
  memberlist: Student[];
  user: User=new User();

  subscription: Subscription;
  ldapApiUrl='';
  option='';
  hideLoader=true;

  constructor(private http: Http,private userService :UserService){

 	environment.then(environment=> {
        this.ldapApiUrl = environment["ldapApiUrl"];
      });
    this.user = this.userService.getUser();
  }

  	createAuthorizationHeader(headers: Headers) {
	    headers.append('Content-Type', 'application/json'); 
    }

    onChange(option) {
    this.hideLoader=false;
   	 this.option=option;
     let headers = new Headers();
     this.createAuthorizationHeader(headers);
     var data={"login": this.user.uid,"password": this.user.password};
     this.http.post(this.ldapApiUrl+'/option/'+option,JSON.stringify(data),{
            headers: headers
        }).subscribe(data => {
      this.memberlist = data.json() as Student[];
      this.hideLoader=true;
     });
  }
}