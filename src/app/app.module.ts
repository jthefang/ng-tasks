import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FirebaseModule } from './firebase.module';

import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { AllTasksComponent } from './components/all-tasks/all-tasks.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskDialogComponent } from './components/task-dialog/task-dialog.component';
import { TaskItemComponent } from './components/task-item/task-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    AllTasksComponent,
    CalendarComponent,
    AddTaskComponent,
    TaskDialogComponent,
    TaskItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FirebaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
