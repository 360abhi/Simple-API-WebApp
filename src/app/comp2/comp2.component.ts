import { Component } from '@angular/core';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component {

  constructor(public _apiservice: ApiService){
    this._apiservice.value.subscribe(data => this.value = data) ;
  }

  value: string = "abhishek"

  update(target:any) : void {
    this._apiservice.value.next(target.value)
  }
}
