import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { TaskService } from 'src/app/services/task.service';
import { TaskDialogData, TaskDialogAction } from 'src/app/models/TaskDialogData';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;

  constructor(private taskService: TaskService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onCheck(checked: boolean) {
    this.task.isComplete = checked;
    this.taskService.updateTask(this.task);
  }

  openTaskDialog(): void {
    const taskDialogData: TaskDialogData = {
      title: "Edit task",
      task: this.task,
      actionOnSubmit: TaskDialogAction.UPDATE_TASK,
      canDelete: true
    }
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '500px',
      data: taskDialogData,
    });
  }

}
