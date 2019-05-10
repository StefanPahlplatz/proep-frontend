export class Vehicle {
  public make: string
  public model: string
  public vehicleType: string
  public registration: string
  public mileage: number
  public vehicleColor: string
  public price: number
  public vehicleUser: string
  public vehicleId: number

  public imagePath: string

  constructor(
    make: string,
    model: string,
    vehicleType: string,
    imagePath: string
  ) {
    this.make = make
    this.model = model
    this.vehicleType = vehicleType
    this.imagePath = imagePath
  }
}
