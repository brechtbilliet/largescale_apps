import { Task } from '../types/task.type';
import { TaskActions, TaskActionTypes } from './tasks.actions';
export function tasksReducer(state: Array<Task> = [], action: TaskActions): Array<Task> {
    switch (action.type) {
        case TaskActionTypes.TASKS_ADD:
            return [...state, action.payload.task];
        case TaskActionTypes.TASKS_ADD_ALL:
            return [...state, ...action.payload.tasks];
        case TaskActionTypes.TASKS_REMOVE:
            return state.filter(item => item.id !== action.payload.task.id);
        case TaskActionTypes.TASKS_UPDATE:
            return state.map(item => item.id === action.payload.task.id ? Object.assign({}, action.payload.task) : item);
        default:
            return state;
    }

}