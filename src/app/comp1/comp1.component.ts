import { Component } from '@angular/core';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {
  constructor(public _apiservice: ApiService){
    this._apiservice.value.subscribe(data => this.value = data) ;
  }

  value:any;

  update(target:any) : void {
    this._apiservice.value.next(target.value)
  }
}
