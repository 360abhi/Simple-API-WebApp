import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewInit {
  

  value: string = 'abhishek';
  @ViewChild('box') box : ElementRef ;
  @ViewChild('text') text: ElementRef;

  @ViewChild(ChildComponent) child : ChildComponent;

  ngAfterViewInit(): void {
    // this.box.nativeElement.style.backgroundColor = "blue"
    // this.text.nativeElement.innerHTML = "this is the changed text"
  
  }

  change() : void {
    this.child.value = "Its changed";
  }
  
}
