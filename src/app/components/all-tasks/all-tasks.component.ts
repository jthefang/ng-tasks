import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { TaskListData } from 'src/app/models/TaskListData';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent implements OnInit {
  taskList: TaskListData = {
    listData: [],
    listId: "list-all-tasks",
    listTitle: "All tasks"
  };

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.taskList.listData = tasks;
    });
  }

}
