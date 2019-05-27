import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private baseApiUrl: string = `${environment.airRnD.baseUrl}/vehicles`

  constructor(private http: HttpClient) {}

  getVehicles() {
    this.http.get(this.baseApiUrl)
  }
}
