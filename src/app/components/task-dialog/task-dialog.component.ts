import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskDialogData, TaskDialogAction } from 'src/app/models/TaskDialogData';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.css']
})
export class TaskDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TaskDialogComponent>,
    private taskService: TaskService,
    @Inject(MAT_DIALOG_DATA) public data: TaskDialogData) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(newTask: Task) {
    switch (this.data.actionOnSubmit) {
      case TaskDialogAction.ADD_TASK:
        console.log(`Adding task`);
        this.taskService.addTask(newTask)
          .then(task => {
            console.log(`Uploaded task`);
          });
        break;
      case TaskDialogAction.UPDATE_TASK:
        console.log(`Updating task`);
        this.taskService.updateTask(newTask);
        break;
    }
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task);
    this.dialogRef.close();
  }

}
