import { Component } from '@angular/core';
import { TasksSandbox } from '../tasks.sandbox';
import { Task } from '../types/task.type';

@Component({
    selector: 'tasks',
    template: `
        <h1>Tasks</h1>
        <button (click)="fetchTasks()">Fetch tasks</button>
        <task-list [tasks]="tasks$|async" (add)="addTask($event)" (remove)="removeTask($event)" (update)="updateTask($event)"></task-list>
`,
})
export class TasksContainer {
    tasks$ = this.sb.tasks$;

    constructor(private sb: TasksSandbox) {
    }

    fetchTasks(): void {
        this.sb.fetchTasks();
    }

    removeTask(task: Task): void {
        this.sb.removeTask(task);
    }

    updateTask(updatedTask: Task): void {
        this.sb.updateTask(updatedTask);
    }

    addTask(label: string): void {
        this.sb.addTask(label);
    }
}
