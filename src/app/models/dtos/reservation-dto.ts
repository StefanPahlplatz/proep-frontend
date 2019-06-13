import { VehicleDto } from './vehicle-dto';
import { ReviewDto } from './review-dto';

export interface ReservationRequestDto {
  userId: number
  vehicleId: number
  price: number
  startDate: Date
  endDate: Date
}

export interface ReservationDto {
  id: number
  startdate: Date
  enddate: Date
  cancalled: boolean
  returned: boolean
  paid: boolean
  price: number
  reviews: ReviewDto
  vehicle: VehicleDto
}
