import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookieModule } from "./services/cookie/cookie.module";
import { API_BASE_URL } from "./services/user/user.service";
import { environment } from "../environments/environment";
import { UserModule } from "./services/user/user.module";
import { UserProfileComponent } from './views/user-profile/user-profile.component';
import { MaterialModule } from "./modules/material/material.module";
import { UserProfileEditComponent } from './views/user-profile-edit/user-profile-edit.component';
import { UserEmailChangeComponent } from './views/user-email-change/user-email-change.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    UserProfileEditComponent,
    UserEmailChangeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    CookieModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: API_BASE_URL, useValue: environment.API_BASE_URL
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
