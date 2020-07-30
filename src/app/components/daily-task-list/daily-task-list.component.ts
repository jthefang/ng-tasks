import { Component, OnInit, Input } from '@angular/core';
import * as dates from '../../util/dates';
import { TaskService } from 'src/app/services/task.service';
import { TaskListData } from 'src/app/models/TaskListData';

@Component({
  selector: 'app-daily-task-list',
  templateUrl: './daily-task-list.component.html',
  styleUrls: ['./daily-task-list.component.css']
})
export class DailyTaskListComponent implements OnInit {
  @Input() dates: Date[];
  taskListData: TaskListData = {
    listData: [],
    listTitle: "",
    listId: ""
  };

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    let isWeekend: boolean = this.dates.length == 2;
    if (isWeekend) {
      this.taskListData.listTitle = `Weekend, ${dates.formatDate(this.dates[0], false)}-${dates.formatDate(this.dates[1], false)}`;
    } else {
      this.taskListData.listTitle = dates.formatDate(this.dates[0], true);
    }
    if (dates.datesAreOnSameDay(new Date(), this.dates[0])) {
      this.taskListData.listTitle += " (Today)";
    }

    this.taskService.getTasksForDate(this.dates[0]).subscribe(tasks => {
      this.taskListData.listData = tasks;
    });
  }

}
