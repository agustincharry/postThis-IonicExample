import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private apiUrl:string = "https://jsonplaceholder.typicode.com";

  constructor(private http: HttpClient) { }

  getComments(postId): Observable<any> {
    const url = `${this.apiUrl}/comments?postId=${postId}`;
    return this.http.get(url);
  }

}
