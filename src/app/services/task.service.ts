import { Injectable } from '@angular/core';
import { TASKS } from '../mock-tasks';
import { Task } from '../Task';
import {Observable,of} from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks():Observable<Task[]>{
    const tasks= of(TASKS)
    return tasks;
  }
}
