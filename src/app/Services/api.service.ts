import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url : string = 'https://jsonplaceholder.typicode.com/users';
  toshow : boolean = false;

  constructor(private http: HttpClient) { }

  getDetails() : Observable<any> {
    return this.http.get(this.url);
  }

  show() : void {
    this.toshow = !this.toshow;
  }
}
