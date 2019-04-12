import { CommonModule } from '@angular/common'
import { MaterialModule } from './material.module'
import { NgModule } from '@angular/core'
import { NavbarComponent } from './navbar/navbar.component'

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, MaterialModule],
  exports: [MaterialModule, NavbarComponent],
})
export class SharedModule {}
