import { Component, OnInit } from '@angular/core';
import { EditTaskComponent } from '../edit-task/edit-task.component';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogData } from 'src/app/models/TaskDialogData';
import { Task } from 'src/app/models/Task';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(public dialog: MatDialog,
    private taskService: TaskService) { }

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
      shouldAddTask: true,
    }
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '500px',
      data: taskDialogData,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`The dialog was closed with result: ${result}`);
    });
  }

}
