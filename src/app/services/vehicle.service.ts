import { VehicleCreationDto } from './../models/dtos/vehicle-dto'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'

import { IVehicle } from './../models/interfaces/vehicle'
import { JsonFormatConvertor } from './../shared/utilities/json-format-convertor'
import { UserDto } from './../models/dtos/user-dto'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private baseApiUrl: string = `${environment.airRnD.baseUrl}/vehicles`

  constructor(private http: HttpClient) {}

  getVehicles(): Observable<IVehicle[]> {
    return this.http.get<IVehicle[]>(this.baseApiUrl + '/')
  }

  getVehicleWithId(i: number): Observable<IVehicle> {
    return this.http.get<IVehicle>(`${this.baseApiUrl}/${i}`)
  }

  //Does not work yet
  getVehicleByCity(city: string): Observable<IVehicle> {
    return this.http.get<IVehicle>(`${this.baseApiUrl}/city/${city}`)
  }

  makeVehicle(vehicle: VehicleCreationDto): Observable<any> {
    return this.http.post<any>(`${this.baseApiUrl}/`, vehicle)
  }

  getVehicleByOwner(user: UserDto): Observable<IVehicle[]> {
    return this.http.post<IVehicle[]>(`${this.baseApiUrl}/user`, user).pipe(
      map(response => {
        const convertedData: IVehicle[] = JsonFormatConvertor.objectKeysToCamelCase(
          response
        )
        return convertedData
      })
    )
  }
}
