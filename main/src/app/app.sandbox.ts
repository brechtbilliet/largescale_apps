import { Injectable } from '@angular/core';
import { TasksService } from 'tasks/src';

@Injectable()
export class AppSandbox {
    constructor(private tasksService: TasksService) {

    }

    doStuff(): void {
        this.tasksService.doStuff('hi there');
    }
}