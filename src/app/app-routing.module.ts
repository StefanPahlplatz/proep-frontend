import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AdminPageComponent } from './admin-page/admin-page.component'
import { AdminGuard } from './core/guards/admin.guard'
import { ChangePasswordPageComponent } from './change-password-page/change-password.component'
import { GuestGuard } from './core/guards/guest.guard'
import { HomePageComponent } from './home-page/home-page.component'
import { LoginPageComponent } from './login-page/login-page.component'
import { LoginGuard } from './core/guards/login.guard'
import { ErrorPageComponent } from './error-page/error-page.component'
import { RegisterComponent } from './register-page/register-page.component'
import { PopularRidesPageComponent } from './popular-rides-page/popular-rides-page.component'
import { VehiclesComponent } from './vehicles/vehicles.component'

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'vehicles',
    component: VehiclesComponent,
  },
  {
    path: 'all',
    component: PopularRidesPageComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [GuestGuard],
  },
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [GuestGuard],
  },
  {
    path: 'change-password',
    component: ChangePasswordPageComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'admin',
    component: AdminPageComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'error/401',
    component: ErrorPageComponent,
    data: {
      code: 401,
      title: 'Oops! You are unauthorized',
      description:
        'The page you are looking for is unauthorized to you, because you need to log in first.',
    },
  },
  {
    path: 'error/403',
    component: ErrorPageComponent,
    data: {
      code: 403,
      title: 'Oops! This page is forbidden',
      description:
        "The page you are looking for is forbidden to you, because you don't have to correct authorization.",
    },
  },
  {
    path: '**',
    component: ErrorPageComponent,
    data: {
      code: 404,
      title: 'Oops! Nothing was found',
      description:
        'The page you are looking for might have been removed had its name changed or is temporarily unavailable.',
    },
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
