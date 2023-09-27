import { Injectable } from '@angular/core';

import { Task } from '../Task';
import {Observable,of} from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiURL:string="http://localhost:5000/tasks"


  constructor(private http:HttpClient) { }

  getTasks():Observable<Task[]>{
    // const tasks= of(TASKS)
    // return tasks;
    return this.http.get<Task[]>(this.apiURL);
  }
}
