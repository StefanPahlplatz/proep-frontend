import { VehicleCreationDto } from './../models/dtos/vehicle-dto'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'

import { VehicleDto } from '../models/dtos/vehicle-dto'
import { JsonFormatConvertor } from './../shared/utilities/json-format-convertor'
import { UserDto } from './../models/dtos/user-dto'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private baseApiUrl: string = `${environment.airRnD.baseUrl}/vehicles`

  constructor(private http: HttpClient) { }

  getVehicles(): Observable<VehicleDto[]> {
    return this.http.get<VehicleDto[]>(this.baseApiUrl + '/')
  }

  getVehicleWithId(i: number): Observable<VehicleDto> {
    return this.http.get<VehicleDto>(`${this.baseApiUrl}/${i}`)
  }

  getVehicleByCity(city: string): Observable<VehicleDto> {
    return this.http.get<VehicleDto>(`${this.baseApiUrl}/city/${city}`)
  }

  makeVehicle(vehicle: VehicleCreationDto): Observable<any> {
    return this.http.post<any>(`${this.baseApiUrl}/`, vehicle)
  }

  getVehicleByOwner(user: UserDto): Observable<VehicleDto[]> {
    return this.http.post<VehicleDto[]>(`${this.baseApiUrl}/user`, user).pipe(
      map(response => {
        const convertedData: VehicleDto[] = JsonFormatConvertor.objectKeysToCamelCase(
          response
        )
        return convertedData
      })
    )
  }
}
