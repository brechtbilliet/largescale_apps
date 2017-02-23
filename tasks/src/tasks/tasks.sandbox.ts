import { Injectable } from '@angular/core';
import { TasksService } from './services/tasks.service';
import { Task } from './types/task.type';
import { Store } from '@ngrx/store';
import { AddAllTasks, AddTask, RemoveTask, UpdateTask } from './statemanagement/tasks.actions';
@Injectable()
export class TasksSandbox {
    tasks$ = this.store.select(state => state.tasks);
    constructor(private tasksService: TasksService, private store: Store<{tasks: Array<Task>}>) {

    }

    fetchTasks(): void {
        this.tasksService.fetchTasks().subscribe((tasks: Array<Task>) => {
            this.store.dispatch(new AddAllTasks(tasks));
        });
    }

    addTask(label: string): void {
        this.tasksService.addTask(label).subscribe((task) => {
            this.store.dispatch(new AddTask(task));
        });
    }

    removeTask(task: Task): void {
        this.tasksService.removeTask(task).subscribe(() => {
            this.store.dispatch(new RemoveTask(task));
        });
    }

    updateTask(task: Task): void {
        this.tasksService.updateTask(task).subscribe(() => {
            this.store.dispatch(new UpdateTask(task));
        });
    }
}