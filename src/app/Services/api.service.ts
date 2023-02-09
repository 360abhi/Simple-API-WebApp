import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlUsers : string = 'https://jsonplaceholder.typicode.com/users';
  toshow : boolean = false;
  urlPosts : string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getDetails() : Observable<any> {
    return this.http.get(this.urlUsers);
  }
  
  getPosts() : Observable<any> {
    return this.http.get(this.urlPosts);
  }

  show() : void {
    this.toshow = !this.toshow;
  }
}
