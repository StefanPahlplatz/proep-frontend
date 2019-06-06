import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  formdata: FormGroup

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.formdata = new FormGroup({
      location: new FormControl(''),
      from: new FormControl(''),
      to: new FormControl(''),
      type: new FormControl(''),
    })
  }

  onClickSubmit(data) {
    console.log(this.formdata)
    this.router.navigateByUrl(
      `/recommendation?location=${this.formdata.value.location}&from=${
        this.formdata.value.from
      }&till=${this.formdata.value.to}`
    )
  }
}
