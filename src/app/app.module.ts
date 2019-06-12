import { LogoutPageComponent } from './app-pages/logout-page/logout-page.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { HttpModule } from '@angular/http'
import { MatNativeDateModule } from '@angular/material'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { AdminPageComponent } from './app-pages/admin-page/admin-page.component'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { ChangePasswordPageComponent } from './app-pages/change-password-page/change-password.component'
import { ErrorPageComponent } from './app-pages/error-page/error-page.component'
import { HomePageComponent } from './app-pages/home-page/home-page.component'
import { LoginPageComponent } from './app-pages/login-page/login-page.component'
import { MaterialModule } from './shared/material.module'
import { PopularRidesPageComponent } from './app-pages/popular-rides-page/popular-rides-page.component'
import { RegisterPageComponent } from './app-pages/register-page/register-page.component'
import { SharedModule } from './shared/shared.module'
import { UserProfilePageComponent } from './app-pages/user-profile-page/user-profile-page.component'
import { VehicleDetailPageComponent } from './app-pages/vehicle-detail-page/vehicle-detail-page.component'
import { VehiclesPageComponent } from './app-pages/vehicles-page/vehicles-page.component'
import { TokenInterceptor } from './services/http-interceptors/token-interceptor'

@NgModule({
  declarations: [
    AdminPageComponent,
    AppComponent,
    ChangePasswordPageComponent,
    ErrorPageComponent,
    HomePageComponent,
    LoginPageComponent,
    LogoutPageComponent,
    PopularRidesPageComponent,
    RegisterPageComponent,
    VehicleDetailPageComponent,
    VehiclesPageComponent,
    UserProfilePageComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    MatNativeDateModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
