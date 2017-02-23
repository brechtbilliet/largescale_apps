import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {TasksModule} from 'tasks/src';
import { AppSandbox } from './app.sandbox';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TasksModule
  ],
  providers: [AppSandbox],
  bootstrap: [AppComponent]
})
export class AppModule { }
