import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AdminPageComponent } from './app-pages/admin-page/admin-page.component'
import { AdminGuard } from './guards/admin.guard'
import { ChangePasswordPageComponent } from './app-pages/change-password-page/change-password.component'
import { GuestGuard } from './guards/guest.guard'
import { HomePageComponent } from './app-pages/home-page/home-page.component'
import { LoginPageComponent } from './app-pages/login-page/login-page.component'
import { LoginGuard } from './guards/login.guard'
import { ErrorPageComponent } from './app-pages/error-page/error-page.component'
import { RegisterComponent } from './app-pages/register-page/register-page.component'
import { PopularRidesPageComponent } from './app-pages/popular-rides-page/popular-rides-page.component'
import { VehiclesPageComponent } from './app-pages/vehicles-page/vehicles-page.component'
import { VehicleDetailPageComponent } from './app-pages/vehicle-detail-page/vehicle-detail-page.component'

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
    path: 'recommendation',
    component: PopularRidesPageComponent,
  },
  {
    path: 'vehicles',
    component: VehiclesPageComponent,
  },
  {
    path: 'vehicles/:id',
    component: VehicleDetailPageComponent,
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
