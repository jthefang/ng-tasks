import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-clear-completed-tasks',
  templateUrl: './clear-completed-tasks.component.html',
  styleUrls: ['./clear-completed-tasks.component.css']
})
export class ClearCompletedTasksComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  clearCompletedTasks() {
    this.taskService.deleteAllCompletedTasks();
  }

}
