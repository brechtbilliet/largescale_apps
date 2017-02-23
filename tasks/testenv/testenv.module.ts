import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TestenvContainer } from './testenv.container';
import { TasksModule } from '../src/tasks/tasks.module';
import { rootReducer } from './root.reducer';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
    declarations: [
        TestenvContainer
    ],
    imports: [
        TasksModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        StoreModule.provideStore(rootReducer), StoreDevtoolsModule.instrumentOnlyWithExtension()
    ],
    providers: [],
    bootstrap: [TestenvContainer]
})
export class TestenvModule {
}
