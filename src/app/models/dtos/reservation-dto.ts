export interface ReservationDto {
  id: number
  cancelled: boolean
  enddate: Date
  startdate: Date
  price: number
  returned: boolean
  reviews: ReviewDto[]
}

export interface ReviewDto {
  id: number
  rating: number
  type: string
  comment: string
}
