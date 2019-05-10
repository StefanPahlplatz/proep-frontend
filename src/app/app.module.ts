import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { HttpModule } from '@angular/http'
import { MatNativeDateModule } from '@angular/material'
import { NgModule } from '@angular/core'

import { AccountMenuComponent } from './component/header/account-menu/account-menu.component'
import { AdminPageComponent } from './admin-page/admin-page.component'
import { ApiCardComponent } from './component/api-card/api-card.component'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { ChangePasswordPageComponent } from './change-password-page/change-password.component'
import { CoreModule } from './core/core.module'
import { ErrorPageComponent } from './error-page/error-page.component'
import { FooterComponent } from './component/footer/footer.component'
import { HeaderComponent } from './component/header/header.component'
import { HomePageComponent } from './home-page/home-page.component'
import { LoginPageComponent } from './login-page/login-page.component'
import { MaterialModule } from './shared/material.module'
import { PopularRidesPageComponent } from './popular-rides-page/popular-rides-page.component'
import { RegisterComponent } from './register-page/register-page.component'
import { SharedModule } from './shared/shared.module'
import { VehicleDetailPageComponent } from './vehicle-detail-page/vehicle-detail-page.component'
import { VehicleItemComponent } from './vehicles/vehicle-list/vehicle-item/vehicle-item.component'
import { VehicleListComponent } from './vehicles/vehicle-list/vehicle-list.component'
import { VehiclesComponent } from './vehicles/vehicles.component'

@NgModule({
  declarations: [
    AccountMenuComponent,
    AdminPageComponent,
    PopularRidesPageComponent,
    ApiCardComponent,
    AppComponent,
    ChangePasswordPageComponent,
    ErrorPageComponent,
    FooterComponent,
    HeaderComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterComponent,
    VehicleDetailPageComponent,
    VehicleItemComponent,
    VehicleListComponent,
    VehiclesComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    MatNativeDateModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
