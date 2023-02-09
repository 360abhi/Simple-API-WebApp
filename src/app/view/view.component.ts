import { Component } from '@angular/core';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {

  
  constructor(public _apiservice: ApiService){
    this._apiservice.value.subscribe(data => this.value = data) ;
  }
  value:any;
}
