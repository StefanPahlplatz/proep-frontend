import { UserDto } from './user-dto'
import { AvailableDto } from './available-dto'
import { ReservationDto } from './reservation-dto'

export interface VehicleDto {
  id: number
  timestamp: Date
  registration: string
  colour: string
  mileage: string
  model: string
  make: string
  price: number
  type: string
  user: UserDto
  longitude: number
  latitude: number
  rented: boolean
  timeRented: number
  availables: AvailableDto[]
  reservations: ReservationDto[]
}
