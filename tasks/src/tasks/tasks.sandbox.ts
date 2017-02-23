import { Injectable } from '@angular/core';
import { TasksService } from './services/tasks.service';
import { Observable } from 'rxjs';
import { Task } from './types/task.type';
@Injectable()
export class TasksSandbox {
    constructor(private tasksService: TasksService) {

    }

    fetchTasks(): Observable<Array<Task>> {
        return this.tasksService.fetchTasks();
    }
}