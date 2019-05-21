import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
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
import { VehicleDetailPageComponent } from './app-pages/vehicle-detail-page/vehicle-detail-page.component'
import { VehiclesPageComponent } from './app-pages/vehicles-page/vehicles-page.component'

@NgModule({
  declarations: [
    AdminPageComponent,
    AppComponent,
    ChangePasswordPageComponent,
    ErrorPageComponent,
    HomePageComponent,
    LoginPageComponent,
    PopularRidesPageComponent,
    RegisterPageComponent,
    VehicleDetailPageComponent,
    VehiclesPageComponent,
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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
