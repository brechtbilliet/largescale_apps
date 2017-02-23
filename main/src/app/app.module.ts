import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {TasksModule} from 'tasks/src';
import { AppSandbox } from './app.sandbox';
import { rootReducer } from '../root.reducer';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    StoreModule.provideStore(rootReducer), StoreDevtoolsModule.instrumentOnlyWithExtension(),
    BrowserModule,
    FormsModule,
    HttpModule,
    TasksModule
  ],
  providers: [AppSandbox],
  bootstrap: [AppComponent]
})
export class AppModule { }
