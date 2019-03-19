import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { MatToolbarModule, MatIconRegistry } from "@angular/material";
import { RouterTestingModule } from "@angular/router/testing";
import { TestBed, async } from "@angular/core/testing";

import { ApiService } from "./core/services/api.service";
import { AppComponent } from "./app.component";
import { AuthService } from "./core/services/auth.service";
import { ConfigService } from "./core/services/config.service";
import { FooService } from "./core/services/foo.service";
import { FooterComponent } from "./component/footer/footer.component";
import { MockApiService } from "./core/mocks/api.service.mock";
import { UserService } from "./core/services/user.service";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, FooterComponent],
      imports: [RouterTestingModule, MatToolbarModule],
      providers: [
        MatIconRegistry,
        {
          provide: ApiService,
          useClass: MockApiService
        },
        AuthService,
        UserService,
        FooService,
        ConfigService
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
