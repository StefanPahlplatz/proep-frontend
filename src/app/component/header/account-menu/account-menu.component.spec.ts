import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AccountMenuComponent } from "./account-menu.component";
import { ApiService } from "../../../core/services/api.service";
import { AuthService } from "../../../core/services/auth.service";
import { ConfigService } from "../../../core/services/config.service";
import { MockApiService } from "../../../core/mocks/api.service.mock";
import { MockUserService } from "../../../core/mocks/user.service.mock";
import { UserService } from "../../../core/services/user.service";

describe("AccountMenuComponent", () => {
  let component: AccountMenuComponent;
  let fixture: ComponentFixture<AccountMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        {
          provide: UserService,
          useClass: MockUserService
        },
        {
          provide: ApiService,
          useClass: MockApiService
        },
        AuthService,
        ConfigService
      ],
      declarations: [AccountMenuComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
