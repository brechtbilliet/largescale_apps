import { Component } from '@angular/core';
import { TasksSandbox } from '../tasks.sandbox';
import { Task } from '../types/task.type';

@Component({
    selector: 'tasks',
    template: `
        <h1>Tasks</h1>
        <button (click)="fetchTasks()">Fetch tasks</button>
        <task-list [tasks]="tasks" (add)="addTask($event)" (remove)="removeTask($event)" (update)="updateTask($event)"></task-list>
`,
})
export class TasksContainer {
    tasks: Array<Task> = [];

    fakeId = 1000;

    constructor(private sb: TasksSandbox) {
    }

    fetchTasks(): void {
        this.sb.fetchTasks().subscribe((res: Array<Task>) => {
            this.tasks = res;
        })
    }

    removeTask(id: string): void {
        // normally go to service
        // this is mock code
        this.tasks = this.tasks.filter(item => item.id !== id);
    }

    updateTask(updatedTask: Task): void {
        // normally go to service
        // this is mock code
        this.tasks = this.tasks.map(task => task.id === updatedTask.id ? updatedTask : task)
    }

    addTask(label: string): void {
        // normally go to service
        // this is mock code
        this.fakeId++;
        this.tasks = [...this.tasks, {label, id: this.fakeId.toString()}]
    }
}
