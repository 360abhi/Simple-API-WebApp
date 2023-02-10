import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

  posts: any;
  constructor(public _apiservice: ApiService){
    this._apiservice.navbar = true;
  }

  ngOnInit(): void {
      this._apiservice.getPosts()
      .subscribe(postData => this.posts = postData)
  }
  
}

