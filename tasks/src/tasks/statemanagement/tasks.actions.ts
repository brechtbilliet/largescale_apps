import { Action } from '@ngrx/store';
import { Task } from '../types/task.type';
let typeCache: {[label: string]: boolean} = {};
export function type<T>(label: T | ''): T {
    if (typeCache[<string>label]) {
        throw new Error(`Action type "${label}" is not unqiue"`);
    }

    typeCache[<string>label] = true;

    return <T>label;
}

export const TaskActionTypes = {
    TASKS_ADD: type<"TASKS_ADD">("TASKS_ADD"),
    TASKS_ADD_ALL: type<"TASKS_ADD_ALL">("TASKS_ADD_ALL"),
    TASKS_REMOVE: type<"TASKS_REMOVE">("TASKS_REMOVE"),
    TASKS_UPDATE: type<"TASKS_UPDATE">("TASKS_UPDATE"),
};

export class AddTask implements Action {
    type = TaskActionTypes.TASKS_ADD;
    payload: {task: Task};

    constructor(task: Task) {
        this.payload = {task};
    }
}

export class AddAllTasks implements Action {
    type = TaskActionTypes.TASKS_ADD_ALL;
    payload: {tasks: Array<Task>};

    constructor(tasks: Array<Task>) {
        this.payload = {tasks};
    }
}

export class UpdateTask implements Action {
    type = TaskActionTypes.TASKS_UPDATE;
    payload: {task: Task};

    constructor(task: Task) {
        this.payload = {task};
    }
}

export class RemoveTask implements Action {
    type = TaskActionTypes.TASKS_REMOVE;
    payload: {task: Task};

    constructor(task: Task) {
        this.payload = {task};
    }
}

export type TaskActions =
    AddTask
        | AddAllTasks
        | UpdateTask
        | RemoveTask;