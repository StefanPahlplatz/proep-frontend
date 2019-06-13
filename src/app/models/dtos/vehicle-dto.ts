import { AvailableDto } from './available-dto'
import { UserDto } from './user-dto'
import { ReservationDto } from './reservation-dto'

export interface VehicleDto {
  availables: AvailableDto[]
  colour: string
  id: number
  images: ImageDto[]
  latitude: number
  longitude: number
  make: string
  mileage: number
  model: string
  price: number
  registration: string
  rented: boolean
  reservations: ReservationDto[]
  timesRented: number
  timestamp: Date
  type: string
  user: UserDto
}

export interface ImageDto {
  id: number
  path: string
  timestamp: Date
}

export interface VehicleCreationDto {
  userId: number
  registration: string
  price: number
  miledge: number
}
