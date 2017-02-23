import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../types/task.type';
@Injectable()
export class TasksService {
    fetchTasks(): Observable<Array<Task>> {
        let tasks = [];
        for (let i = 0; i < 10; i++) {
            tasks.push({id: i.toString(), label: `dummy label ${i}`});
        }
        return Observable.from([tasks]);
    }

    doStuff(foo: string): void {
        window.alert(`TasksService is doing stuff:${foo}`);
    }
}