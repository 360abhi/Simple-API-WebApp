import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: ['./errorpage.component.css']
})
export class ErrorpageComponent {

  constructor(public router:Router,public _apiservice:ApiService) {
    this._apiservice.navbar = false;
  }

  returnToHome() : void {
    this.router.navigate(["/"])
  }
}
