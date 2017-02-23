import { Component, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { Task } from '../types/task.type';
@Component({
    selector: 'task',
    template: `
        <p>
            <strong>{{task?.id}}: </strong>
            <span *ngIf="!edit">
                <span>{{task?.label}}</span>
                <button (click)="toggleEdit()">Edit</button>
            </span>
            <span *ngIf="edit">
                <input type="text" [(ngModel)]="label"/>
                <button (click)="save()">save</button>
                <button (click)="toggleEdit()">cancel</button>
            </span>
            <button (click)="remove.emit(task?.id)">Remove</button>
        </p>
`
})
export class TaskComponent implements OnChanges {
    @Input() task: Task;
    @Output() remove = new EventEmitter<string>();
    @Output() update = new EventEmitter<Task>();

    edit = false;
    label: string;

    toggleEdit(): void {
        this.edit = !this.edit;
    }

    ngOnChanges(): void{
        this.label = this.task.label;
    }

    save(): void{
        this.toggleEdit();
        this.update.emit(Object.assign({}, this.task, {label: this.label}));
    }
}