import { ReservationDto } from './reservation-dto'
import { AuthorityDto } from './authority-dto'

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
  reservations: ReservationDto[]
  authorities: AuthorityDto[]
}
