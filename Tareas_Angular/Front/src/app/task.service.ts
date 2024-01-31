import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tarea } from './interfaces/Tarea';

@Injectable({
 providedIn: 'root'
})
export class TaskService {

 constructor(private http: HttpClient) { }

 createTask(taskData: any) {
  const token = sessionStorage.getItem('token');
  if (!token) {
    throw new Error("Token not found");
  }
  const headers = new HttpHeaders().set('x-token', token);
 
  return this.http.post('http://localhost:9090/api/task', taskData, { headers });
 }
 getTasks(): Observable<Tarea[]> {
  const token = sessionStorage.getItem('token');
  if (!token) {
     throw new Error("Token not found");
  }
  const headers = new HttpHeaders().set('x-token', token);
 
  return this.http.get<Tarea[]>('http://localhost:9090/api/task', { headers }).pipe(
     map((response: any) => response.data)
  );
 }
}