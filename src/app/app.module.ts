import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { NgModule } from "@angular/core";

import { AccountMenuComponent } from "./component/header/account-menu/account-menu.component";
import { AdminComponent } from "./admin/admin.component";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { ForbiddenComponent } from "./forbidden/forbidden.component";
import {
  HeaderComponent,
  ApiCardComponent,
  FooterComponent
} from "./component";
import { HomeComponent } from "./home";
import { LoginComponent } from "./login";
import { LoginGuard, GuestGuard, AdminGuard } from "./guard";
import { NotFoundComponent } from "./not-found";
import { SharedModule } from "./shared/shared.module";
import { SignupComponent } from "./signup/signup.component";
import { UserService } from "./core/services/user.service";

export function initUserFactory(userService: UserService) {
  return () => userService.initUser();
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ApiCardComponent,
    HomeComponent,
    LoginComponent,
    NotFoundComponent,
    AccountMenuComponent,
    ChangePasswordComponent,
    ForbiddenComponent,
    AdminComponent,
    SignupComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    FlexLayoutModule
  ],
  providers: [LoginGuard, GuestGuard, AdminGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
