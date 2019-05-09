import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { HttpModule } from '@angular/http'
import { NgModule } from '@angular/core'

import { AccountMenuComponent } from './component/header/account-menu/account-menu.component'
import { AdminComponent } from './admin/admin.component'
import { ApiCardComponent } from './component/api-card/api-card.component'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { ChangePasswordComponent } from './change-password/change-password.component'
import { CoreModule } from './core/core.module'
import { FooterComponent } from './component/footer/footer.component'
import { HeaderComponent } from './component/header/header.component'
import { HomePageComponent } from './home-page/home-page.component'
import { LoginPageComponent } from './login-page/login-page.component'
import { ErrorPageComponent } from './error-page/error-page.component'
import { SharedModule } from './shared/shared.module'
import { RegisterComponent } from './register-page/register-page.component'
import { MatNativeDateModule } from '@angular/material'
import { MaterialModule } from './shared/material.module'
import { AllRidesComponent } from './all-rides/all-rides.component'
import { VehiclesComponent } from './vehicles/vehicles.component'
import { VehicleListComponent } from './vehicles/vehicle-list/vehicle-list.component'
import { VehicleDetailComponent } from './vehicles/vehicle-detail/vehicle-detail.component'
import { VehicleItemComponent } from './vehicles/vehicle-list/vehicle-item/vehicle-item.component'

@NgModule({
  declarations: [
    AccountMenuComponent,
    AdminComponent,
    AllRidesComponent,
    ApiCardComponent,
    AppComponent,
    ChangePasswordComponent,
    ErrorPageComponent,
    FooterComponent,
    HeaderComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterComponent,
    VehicleDetailComponent,
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
