import {Component} from '@angular/core';
import {Credential} from './credential';
import { Router} from '@angular/router';
import { Http, Headers} from '@angular/http';

import { environment } from '../../../environments/environment';

import {UserService} from '../../core/service/user.service';
import {User} from '../../core/user';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

	public cred=new Credential();
	ldapApiUrl='';
  user: User=new User();

 	constructor(private http: Http,private userService :UserService,private router: Router){

 	 environment.then(environment=> {
        this.ldapApiUrl = environment["ldapApiUrl"];
     });
    }

	createAuthorizationHeader(headers: Headers) {
	    headers.append('Content-Type', 'application/json'); 
    }

	onSubmit(){

	    let headers = new Headers();
        this.createAuthorizationHeader(headers);

        var data={"login": this.cred.uid,"password": this.cred.password}
        this.http.post(this.ldapApiUrl+'/connection',JSON.stringify(data) ,{
            headers: headers
        }).subscribe(data => {
          if(data.status==200){

           this.user.uid = data.json().uid;
           this.user.cn = data.json().cn;
           this.user.sn = data.json().sn;
           this.user.mail = data.json().mail;
           this.user.centraleEtuCursus = data.json().centraleEtuCursus;
           this.user.centraleEtuFormation = data.json().centraleEtuFormation;
           this.user.password=this.cred.password;

           this.userService.sendMessage(this.user);
           this.router.navigateByUrl('/option');
	 		    }else{
	 		    }
		    },err=>{
        this.router.navigateByUrl('/unAuthorized');
    });
	}
}