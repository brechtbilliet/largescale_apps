import { TasksSandbox } from '../tasks.sandbox';
import { TasksContainer } from './tasks.container';
describe('container: TasksContainer', () => {
    let sbMock: TasksSandbox, dummyTask = {id: 'fake', label: 'fakelabel'};
    beforeEach(() => {
        sbMock = jasmine.createSpyObj('sb', ['fetchTasks', 'removeTask', 'updateTask', 'addTask']);
    });
    describe('on fetchTasks', () => {
        it('should fetch the tasks', () => {
            let container = new TasksContainer(sbMock);
            container.fetchTasks();
            expect(sbMock.fetchTasks).toHaveBeenCalled();
        });
    });
    describe('on removeTask', () => {
        it('should remove the task', () => {
            let container = new TasksContainer(sbMock);
            container.removeTask(dummyTask);
            expect(sbMock.removeTask).toHaveBeenCalledWith(dummyTask);
        });
    });
    describe('on updateTask', () => {
        it('should update the task', () => {
            let container = new TasksContainer(sbMock);
            container.updateTask(dummyTask);
            expect(sbMock.updateTask).toHaveBeenCalledWith(dummyTask);
        });
    });
    describe('on addTask', () => {
        it('should add the task', () => {
            let container = new TasksContainer(sbMock);
            container.addTask(dummyTask.label);
            expect(sbMock.addTask).toHaveBeenCalledWith(dummyTask.label);
        });
    });

});