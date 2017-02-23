import { Task } from '../types/task.type';
import { tasksReducer } from './tasks.reducer';
import { AddTask, RemoveTask } from './tasks.actions';
function buildMany(number): Array<Task> {
    const tasks = [];
    for (let i = 0; i < number; i++) {
        tasks.push({label: 'fakelabel', id: i.toString()})
    }
    return tasks;
}

function build(id): Task {
    return {id, label: 'fakelabel'};
}

describe('reducer: tasks reducer', () => {
    describe('when action TASKS_ADD is sent', () => {
        it('should handle the state accordingly', () => {
            const initialState = [...buildMany(5)];
            const newTask = build("10");
            const result = tasksReducer(initialState, new AddTask(newTask));
            expect(result).not.toBe(initialState);
            expect(result[initialState.length]).toBe(newTask);
        });
    });
    describe('when action TASKS_ADD_ALL is sent', () => {

    });
    describe('when action TASKS_REMOVE is sent', () => {
        it('should handle the state accordingly', () => {
            const initialState = [...buildMany(5)];
            const taskToRemove = initialState[0];
            const result = tasksReducer(initialState, new RemoveTask(taskToRemove));
            expect(result).not.toBe(initialState);
            expect(result.filter(item => item.id === taskToRemove.id).length).toBe(0);
        });
    });
    describe('when action TASKS_UPDATE is sent', () => {

    });

    describe('when no action matches', () => {
        it('should return the exact same state', () => {
            const initialState = [...buildMany(5)];
            const result = tasksReducer(initialState, <any>{type: 'fake action'});
            expect(result).toBe(initialState);
        });
    });
});