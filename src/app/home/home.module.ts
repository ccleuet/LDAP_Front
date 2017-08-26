import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { OptionComponent } from './option/option.component';

const appRoutes: Routes = [
   { path: 'home', component: HomeComponent, children : [
	     { path: '', component : LoginComponent }
      ]
   },
  { path: 'option', component: HomeComponent, children : [
       { path: '', component : OptionComponent }
      ]
   }
];

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    OptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ]
})
export class HomeModule { }
