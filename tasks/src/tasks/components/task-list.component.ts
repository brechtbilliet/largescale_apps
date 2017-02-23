import { Component, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { Task } from '../types/task.type';
@Component({
    selector: 'task-list',
    template: `
        <task *ngFor="let task of tasks" 
            [task]="task"
            (update)="update.emit($event)" 
            (remove)="remove.emit($event)">
        </task>
        <p>
            <input type="text" [(ngModel)]="label" />
            <button (click)="onAddClicked()">add</button>
        </p>
`
})
export class TaskListComponent {
    @Input() tasks: Array<Task>;
    @Output() remove = new EventEmitter<Task>();
    @Output() update = new EventEmitter<Task>();
    @Output() add = new EventEmitter<string>();

    label = '';
    onAddClicked(): void{
        this.add.emit(this.label);
        this.label = '';
    }
}