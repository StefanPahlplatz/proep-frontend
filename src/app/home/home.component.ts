import { Component, OnInit } from "@angular/core";

import { ConfigService } from "../core/services/config.service";
import { FooService } from "../core/services/foo.service";
import { UserService } from "../core/services/user.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  public fooResponse = {};
  public whoamiResponse = {};
  public allUserResponse = {};

  constructor(
    private config: ConfigService,
    private fooService: FooService,
    private userService: UserService
  ) {}

  public ngOnInit() {}

  public makeRequest(path) {
    if (path === this.config.foo_url) {
      this.fooService.getFoo().subscribe(
        res => {
          this.forgeResponseObj(this.fooResponse, res, path);
        },
        err => {
          this.forgeResponseObj(this.fooResponse, err, path);
        }
      );
    } else if (path === this.config.whoami_url) {
      this.userService.getMyInfo().subscribe(
        res => {
          this.forgeResponseObj(this.whoamiResponse, res, path);
        },
        err => {
          this.forgeResponseObj(this.whoamiResponse, err, path);
        }
      );
    } else {
      this.userService.getAll().subscribe(
        res => {
          this.forgeResponseObj(this.allUserResponse, res, path);
        },
        err => {
          this.forgeResponseObj(this.allUserResponse, err, path);
        }
      );
    }
  }

  public forgeResponseObj(obj: any, res: any, path: any) {
    obj.path = path;
    obj.method = "GET";
    if (res.ok === false) {
      // err
      obj.status = res.status;
      try {
        obj.body = JSON.stringify(JSON.parse(res._body), null, 2);
      } catch (err) {
        console.log(res);
        obj.body = res.error.message;
      }
    } else {
      // 200
      obj.status = 200;
      obj.body = JSON.stringify(res, null, 2);
    }
  }
}
