import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { ApiService } from './services/api.service'
import { AuthService } from './services/auth.service'
import { ConfigService } from './services/config.service'
import { UserService } from './services/user.service'

@NgModule({
  declarations: [],
  providers: [AuthService, ApiService, ConfigService, UserService],
  imports: [CommonModule, RouterModule],
})
export class CoreModule {}
