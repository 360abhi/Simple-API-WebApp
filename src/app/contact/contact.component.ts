import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewInit {
  

  constructor(public _apiservice: ApiService){
    this._apiservice.navbar = false;
  }

  value: string = 'abhishek';
  @ViewChild('box') box : ElementRef ;
  @ViewChild('text') text: ElementRef;

  @ViewChild(ChildComponent) child : ChildComponent;

  ngAfterViewInit(): void {
    // this.box.nativeElement.style.backgroundColor = "blue"
    // this.text.nativeElement.innerHTML = "this is the changed text"
  }

  change() : void {
    this.child.value = "The value is changed";
  }
  
}
