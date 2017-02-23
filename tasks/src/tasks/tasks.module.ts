import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TasksContainer } from './containers/tasks.container';
import { TasksService } from './services/tasks.service';
import { TasksSandbox } from './tasks.sandbox';
import { TaskComponent } from './components/task.component';
import { TaskListComponent } from './components/task-list.component';

@NgModule({
    declarations: [
        TasksContainer,
        TaskComponent,
        TaskListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [TasksSandbox, TasksService],
    exports: [TasksContainer]
})
export class TasksModule {
}
