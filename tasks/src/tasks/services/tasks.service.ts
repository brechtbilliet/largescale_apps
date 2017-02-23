import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../types/task.type';
@Injectable()
export class TasksService {
    private uniqueId = 1000;

    fetchTasks(): Observable<Array<Task>> {
        let tasks = [];
        for (let i = 0; i < 10; i++) {
            tasks.push({id: i.toString(), label: `dummy label ${i}`});
        }
        return Observable.from([tasks]);
    }

    removeTask(task: Task): Observable<boolean> {
        return Observable.from([true]);
    }

    addTask(label: string): Observable<Task> {
        this.uniqueId++;
        return Observable.from([{label, id: this.uniqueId.toString()}]);
    }

    updateTask(task: Task): Observable<boolean> {
        return Observable.from([true]);
    }

    doStuff(foo: string): void {
        window.alert(`TasksService is doing stuff:${foo}`);
    }
}