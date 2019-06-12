import { AvailableDto } from './../dtos/available-dto'
import { UserDto } from './../dtos/user-dto'
import { ReservationDto } from './../dtos/reservation-dto'

export interface IVehicle {
  id: number
  timestamp: Date
  registration: string
  colour: string
  mileage: number
  model: string
  make: string
  type: string
  price: number
  longitude: number
  latitude: number
  timesRented: number
  user: UserDto
  availables: AvailableDto[]
  reservations: ReservationDto[]
  images: ImageDto[]
  rented: boolean
}

export interface ImageDto {
  id: number
  path: string
  timestamp: Date
}
