import { Component } from '@angular/core';
import { TasksSandbox } from '../tasks.sandbox';
import { Task } from '../types/task.type';

@Component({
    selector: 'tasks',
    template: `
        <h1>Tasks</h1>
        <button (click)="fetchTasks()">Fetch tasks</button>
        
        <table>
            <tr *ngFor="let task of tasks">
                <td>{{task?.id}}</td>
                <td>{{task?.label}}</td>
            </tr>
        </table>
`,
})
export class TasksContainer {
    tasks: Array<Task> = [];

    constructor(private sb: TasksSandbox) {

    }

    fetchTasks(): void {
        this.sb.fetchTasks().subscribe((res: Array<Task>) => {
            this.tasks = res;
        })
    }
}
