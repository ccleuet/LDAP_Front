import {Injectable} from '@angular/core';
import { User } from './user';

@Injectable()
export class loggedUser {

    user: User=new User();

    getUser() {
        return this.user;
    }

    setUser(user){
	    this.user=user;
    }

    setPassword(password){
    	this.user.password=password;
    }
}
