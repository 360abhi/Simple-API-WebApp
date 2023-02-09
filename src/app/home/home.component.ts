import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products:any;
  constructor(public _apiservice : ApiService){}

  ngOnInit(): void {
      this._apiservice.getDetails()
      .subscribe(prodata => this.products = prodata)
  }
}
