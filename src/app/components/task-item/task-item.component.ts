import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  onCheck(checked: boolean) {
    this.task.isComplete = checked;
    this.taskService.updateTask(this.task);
  }

}
