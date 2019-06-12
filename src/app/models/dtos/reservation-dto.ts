import { ReviewDto } from './review-dto'

export interface ReservationDto {
  id: number
  cancelled: boolean
  enddate: Date
  startdate: Date
  price: number
  returned: boolean
  reviews: ReviewDto[]
}
