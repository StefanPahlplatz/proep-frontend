import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AdminComponent } from './admin/admin.component'
import { AdminGuard } from './core/guards/admin.guard'
import { ChangePasswordComponent } from './change-password/change-password.component'
import { ForbiddenComponent } from './forbidden/forbidden.component'
import { GuestGuard } from './core/guards/guest.guard'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { LoginGuard } from './core/guards/login.guard'
import { NotFoundComponent } from './not-found/not-found.component'
import { SignupComponent } from './signup/signup.component'
import { AllRidesComponent } from './all-rides/all-rides.component'
import { VehiclesComponent } from './vehicles/vehicles.component'

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'vehicles',
    component: VehiclesComponent,
    pathMatch: 'full',
  },
  {
    path: 'all',
    component: AllRidesComponent,
    pathMatch: 'full',
  },
  {
    path: 'register',
    component: SignupComponent,
    canActivate: [GuestGuard],
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [GuestGuard],
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard],
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '403',
    component: ForbiddenComponent,
  },
  {
    path: '**',
    redirectTo: '/404',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
