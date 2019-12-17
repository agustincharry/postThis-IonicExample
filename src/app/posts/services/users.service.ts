import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl:string = "https://jsonplaceholder.typicode.com";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    const url = `${this.apiUrl}/users`;
    return this.http.get(url);
  }

  getUser(id): Observable<any> {
    const url = `${this.apiUrl}/users/${id}`;
    return this.http.get(url);
  }

}
