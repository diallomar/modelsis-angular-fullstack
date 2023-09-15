import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:9092'; 

  constructor(private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute) { }

  login(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user);
  }
  signUp(user: User){
    return this.http.post(`${this.apiUrl}/registration`, user);
  }

  logout(): void {
    this.router.navigate(['/login']);
  }

}
