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
import { ForbiddenComponent } from './forbidden/forbidden.component'
import { HeaderComponent } from './component/header/header.component'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { SharedModule } from './shared/shared.module'
import { SignupComponent } from './signup/signup.component'
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
    FooterComponent,
    ForbiddenComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    NotFoundComponent,
    SignupComponent,
    VehiclesComponent,
    VehicleListComponent,
    VehicleDetailComponent,
    VehicleItemComponent,
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
