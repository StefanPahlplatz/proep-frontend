import { Component, OnInit } from '@angular/core'
import { VehicleViewModel } from 'app/models/view-models/vehicle-view-model'
import { FormControl, FormGroup } from '@angular/forms'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { UserService } from '../../services/user.service'
import { AuthService } from '../../services/auth.service'
import { catchError, map } from 'rxjs/operators'
import { of } from 'rxjs/internal/observable/of'
import { UserDto } from '../../models/dtos/user-dto'
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-vehicle-detail-page',
  templateUrl: './vehicle-detail-page.component.html',
  styleUrls: ['./vehicle-detail-page.component.scss'],
})
export class VehicleDetailPageComponent implements OnInit {
  location: string = 'Amsterdam'
  vehicle: VehicleViewModel
  formdata: FormGroup
  isLoading: boolean
  isLoggedIn: boolean
  user: any
  vehicleId: string

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) {
    this.vehicle = {
      id: 123456789,
      brand: 'Tesla',
      imagePath: '',
      model: 'Model S',
      vehicleType: 'Luxury',
    }
    this.isLoading = false
  }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      fromDateInput: new FormControl(''),
      tillDateInput: new FormControl(''),
    })
    this.isLoggedIn = this.authService.isAuthenticated()
    this.authService.getCurrentUser().subscribe((user: UserDto) => {
      this.user = user
      console.log({ user })
    })
    this.activatedRoute.queryParams.subscribe((queryparam: Params) => {
      console.log(queryparam)
    })
    this.activatedRoute.params.subscribe(params => {
      this.vehicleId = params.id
    })
  }

  onClickSubmit(data) {
    console.log(data)
    if (data.fromDateInput && data.tillDateInput) {
      this.http
        .post<{}>(`${environment.airRnD.baseUrl}/reservation/`, {
          userId: this.user.id,
          vehicleId: this.vehicleId,
          startDate: data.fromDateInput,
          endDate: data.tillDateInput,
        })
        .subscribe(re => console.log(re))

      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, 1400)
    }
  }
}
