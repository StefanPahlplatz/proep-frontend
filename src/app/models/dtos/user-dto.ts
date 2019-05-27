import { VehicleDto } from './vehicle-dto'
import { ReservationDto } from './reservation-dto'
import { ReviewDto } from './review-dto'

export interface UserDto {
  id: number
  username: string
  timestamp: Date
  firstname: string
  lastname: string
  rating: number
  address: string
  city: string
  email: string
  telephone: string
  vehicles: VehicleDto[]
  reservations: ReservationDto[]
  reviews: ReviewDto[]
  // authorities?
}
