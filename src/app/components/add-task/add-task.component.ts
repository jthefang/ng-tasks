import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogData, TaskDialogAction } from 'src/app/models/TaskDialogData';
import { Task } from 'src/app/models/Task';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openTaskDialog(): void {
    const newTask: Task = {
      title: "",
      description: "",
      isComplete: false
    }
    const taskDialogData: TaskDialogData = {
      title: "Add task",
      task: newTask,
      actionOnSubmit: TaskDialogAction.ADD_TASK,
      canDelete: false,
    }
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '500px',
      data: taskDialogData,
    });

    dialogRef.afterClosed().subscribe(result => {
      //(`The dialog was closed with result: ${result}`);
    });
  }

}
