import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private apiUrl:string = "https://jsonplaceholder.typicode.com";

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    const url = `${this.apiUrl}/posts`;
    return this.http.get(url);
  }

  getPost(id): Observable<any> {
    const url = `${this.apiUrl}/posts/${id}`;
    return this.http.get(url);
  }

}
