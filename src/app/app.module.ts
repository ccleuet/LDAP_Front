import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoreModule} from './core/core.module';
import { HomeModule} from './home/home.module';

import { AppComponent } from './app.component';
import { unAuthorizedComponent } from './core/unAuthorized/unAuthorized.component';
import { notFoundComponent } from './core/notFound/notFound.component';

import {UserService} from './core/service/user.service';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'unAuthorized',component: unAuthorizedComponent},
    {path: 'notFound', component: notFoundComponent},
    {path: '**', redirectTo: 'notFound'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HomeModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
