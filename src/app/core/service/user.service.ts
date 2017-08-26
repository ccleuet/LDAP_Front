import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { User } from './../user';

@Injectable()
export class UserService {
    private subject = new Subject<any>();
    private user=new User();

    sendMessage(user: User) {
        this.user=user;
        this.subject.next({ user: user });
    }

    clearMessage() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }

    getUser(){
        return this.user;
    }
}