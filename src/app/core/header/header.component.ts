import { Component, OnDestroy, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { User } from './../user';
import { UserService } from './../service/index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{

    subscription: Subscription;
    user: User=new User();

    constructor(private userService: UserService,private router: Router) {
        this.subscription = this.userService.getMessage().subscribe(message => { this.user = message.user; 
        });
    }

    ngOnInit(){
     if(!this.user.password){
      this.router.navigateByUrl('/home');
     }
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
