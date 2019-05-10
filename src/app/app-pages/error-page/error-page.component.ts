import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss'],
})
export class ErrorPageComponent implements OnInit {
  code: number
  title: string
  description: string

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.code = this.route.snapshot.data.code
    this.title = this.route.snapshot.data.title
    this.description = this.route.snapshot.data.description
  }
}
