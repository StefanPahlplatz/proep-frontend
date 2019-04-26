import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { MaterialModule } from './material.module'
import { NavbarComponent } from './navbar/navbar.component'

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [MaterialModule, NavbarComponent],
})
export class SharedModule {}
