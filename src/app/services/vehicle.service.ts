import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { IVehicle } from 'app/models/interfaces/vehicle'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private baseApiUrl: string = `${environment.airRnD.baseUrl}/vehicles/`

  constructor(private http: HttpClient) {}

  getVehicles(): Observable<IVehicle[]> {
    return this.http.get<IVehicle[]>(this.baseApiUrl)
  }

  getVehicleWithId(i: number): Observable<IVehicle> {
    return this.http.get<IVehicle>(this.baseApiUrl + i)
  }

  //Does not work yet
  getVehicleByCity(city: string): Observable<IVehicle> {
    return this.http.get<IVehicle>(this.baseApiUrl + 'city/' + city)
  }

  makeVehicle(id: number, numberPlate: string): Observable<any> {
    return this.http.post<any>(this.baseApiUrl, {
      vehicleId: id.toString(),
      registration: numberPlate,
    })
  }

  // Not implemented yet
  // getVehicleByOwner(user: string): Observable<IVehicle> {
  //   return this.http.get<IVehicle>(this.baseApiUrl + user);
  // }
}
