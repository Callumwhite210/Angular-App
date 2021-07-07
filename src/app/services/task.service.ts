import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Task} from '../Task';
import {TASKS} from '../mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  //adding property for our api URL
  private apiUrl = 'http://localhost:5000/tasks'

  //Parsing in argument 
  constructor(private http:HttpClient) {}

  //Method / Made into an Observable
  getTasks(): Observable <Task[]> {
    return this.http.get<Task[]>(this.apiUrl)
  }
}
