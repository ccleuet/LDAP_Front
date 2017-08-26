import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {notFoundComponent} from './notFound/notFound.component';
import {unAuthorizedComponent} from './unAuthorized/unAuthorized.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    notFoundComponent,
    unAuthorizedComponent
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    notFoundComponent,
    unAuthorizedComponent
  ]
})

export class CoreModule {
}
