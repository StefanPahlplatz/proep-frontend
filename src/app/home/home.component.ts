import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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
      `/all?location=${this.formdata.value.location}&from=${
        this.formdata.value.from
      }&till=${this.formdata.value.to}`
    )
  }
}
