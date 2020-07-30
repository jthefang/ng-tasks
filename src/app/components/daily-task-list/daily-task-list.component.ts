import { Component, OnInit, Input } from '@angular/core';
import * as dates from '../../util/dates';

@Component({
  selector: 'app-daily-task-list',
  templateUrl: './daily-task-list.component.html',
  styleUrls: ['./daily-task-list.component.css']
})
export class DailyTaskListComponent implements OnInit {
  @Input() dates: Date[];
  title: string;

  constructor() { }

  ngOnInit(): void {
    let isWeekend: boolean = this.dates.length == 2;
    if (isWeekend) {
      this.title = `Weekend, ${dates.formatDate(this.dates[0], false)}-${dates.formatDate(this.dates[1], false)}`;
    } else {
      this.title = dates.formatDate(this.dates[0], true);
    }
  }

}
