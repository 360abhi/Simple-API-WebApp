import { Component } from '@angular/core';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public _apiservice: ApiService){
    this._apiservice.navbar = true;
  }

  showData() : void {
    this._apiservice.show()
  }
}
