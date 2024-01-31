import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router'; 


@Injectable({
 providedIn: 'root'
})
export class AuthService {

 constructor(private http: HttpClient,private router: Router) { }

 login( email: string, password: string ): void {
  console.log(email);
  this.http.post('http://localhost:9090/api/login',{ email, password }).pipe(
      tap((response: any) => {
        sessionStorage.setItem('token', response.token);
      }),
      map(() => true),
      catchError(() => of(false))
  ).subscribe(success => {
     if (success) {
       console.log('Login successful');
       this.router.navigateByUrl('/home');
     } else {
       console.log('Login failed');
     }
  });
 }}