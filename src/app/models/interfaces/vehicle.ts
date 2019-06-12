export interface IVehicle {
  id: number
  timestamp: null
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
  user: {}
  availables: []
  reservations: []
  images: []
  rented: boolean
}
