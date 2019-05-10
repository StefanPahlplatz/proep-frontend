import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-popular-rides-page',
  templateUrl: './popular-rides-page.component.html',
  styleUrls: ['./popular-rides-page.component.scss'],
})
export class PopularRidesPageComponent implements OnInit {
  showLocations = false
  showVehicles = false
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

  vehicles = [
    {
      type: 'Dream Car',
      img: '/assets/images/dream-car.jpg',
      route: '/vehicles/dream-car',
    },
    {
      type: 'Family Car',
      img: '/assets/images/family-car.jpg',
      route: '/vehicles/family-car',
    },
    {
      type: 'Eco Car',
      img: '/assets/images/eco-car.jpg',
      route: '/vehicles/eco-car',
    },
    {
      type: 'Oldtimer',
      img: '/assets/images/oldtimer.jpg',
      route: '/vehicles/oldtimer',
    },
    {
      type: 'Fun Car',
      img: '/assets/images/fun-car.jpg',
      route: '/vehicles/fun-car',
    },
    {
      type: 'SUV',
      img: '/assets/images/suv.jpg',
      route: '/vehicles/suv',
    },
  ]

  constructor() {}

  ngOnInit() {}
}
