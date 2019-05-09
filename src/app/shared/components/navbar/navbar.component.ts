import { Component, OnInit, Input } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() canSearch: boolean
  @Input() hasBorder: boolean

  constructor(private router: Router) {}

  ngOnInit() {}

  isCurrentRoute(route: string): boolean {
    return this.router.url === route
  }
}
