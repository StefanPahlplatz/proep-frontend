import { environment } from './../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ReservationDto } from '../models/dtos/reservation-dto'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private baseUrl = `${environment.airRnD.baseUrl}/reservation`

  constructor(private http: HttpClient) {}

  reserveVehicle(reservation: ReservationDto): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/`, reservation)
  }
}