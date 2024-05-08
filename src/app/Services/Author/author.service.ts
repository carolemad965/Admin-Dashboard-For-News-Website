import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private apiUrl = 'https://localhost:44374/api/Author';
  private token = localStorage.getItem('token');
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
   
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get(this.apiUrl,{ headers });
    }
    Delete(id:number):Observable<any>{
      const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
      return this.http.delete(`${this.apiUrl}/${id}`,{ headers });
    }
}
