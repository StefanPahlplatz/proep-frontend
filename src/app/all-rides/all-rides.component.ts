import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-all-rides',
  templateUrl: './all-rides.component.html',
  styleUrls: ['./all-rides.component.scss'],
})
export class AllRidesComponent implements OnInit {
  showLocations = false
  showCars = false
  locations = [
    {
      location: 'Paris',
      img: '/assets/images/paris.jpg',
      route: '/places/paris',
    },
    {
      location: 'London',
      img: '/assets/images/london.jpg',
      route: '/places/london',
    },
    {
      location: 'Tokyo',
      img: '/assets/images/tokyo.jpg',
      route: '/places/tokyo',
    },
    {
      location: 'New York',
      img: '/assets/images/new-york.jpg',
      route: '/places/new-york',
    },
    {
      location: 'San Francisco',
      img: '/assets/images/san-francisco.jpg',
      route: '/places/paris',
    },
    {
      location: 'Prague',
      img: '/assets/images/prague.jpg',
      route: '/places/prague',
    },
    {
      location: 'Florence',
      img: '/assets/images/florence.jpg',
      route: '/places/florence',
    },
    {
      location: 'Rio de Janeiro',
      img: '/assets/images/rio-de-janeiro.jpg',
      route: '/places/rio-de-janeiro',
    },
  ]

  cars = [
    {
      car: 'Dream Car',
      img: '/assets/images/dream-car.jpg',
      route: '/cars/dream-car',
    },
    {
      car: 'Family Car',
      img: '/assets/images/family-car.jpg',
      route: '/cars/family-car',
    },
    {
      car: 'Eco Car',
      img: '/assets/images/eco-car.jpg',
      route: '/cars/eco-car',
    },
    {
      car: 'Oldtimer',
      img: '/assets/images/oldtimer.jpg',
      route: '/cars/oldtimer',
    },
    {
      car: 'Fun Car',
      img: '/assets/images/fun-car.jpg',
      route: '/cars/fun-car',
    },
    {
      car: 'SUV',
      img: '/assets/images/suv.jpg',
      route: '/cars/suv',
    },
  ]

  constructor() {}

  ngOnInit() {}
}
