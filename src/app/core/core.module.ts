import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ApiService } from "./services/api.service";
import { AuthService } from "./services/auth.service";
import { ConfigService } from "./services/config.service";
import { FooService } from "./services/foo.service";
import { UserService } from "./services/user.service";

@NgModule({
  declarations: [],
  providers: [AuthService, ApiService, ConfigService, FooService, UserService],
  imports: [CommonModule]
})
export class CoreModule {}
