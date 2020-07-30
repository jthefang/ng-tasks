import { Component, OnInit } from '@angular/core';
import * as dates from '../../util/dates';

@Component({
  selector: 'app-weekly-planner',
  templateUrl: './weekly-planner.component.html',
  styleUrls: ['./weekly-planner.component.css']
})
export class WeeklyPlannerComponent implements OnInit {
  dates: Date[];
  monday: Date[];
  tuesday: Date[];
  wednesday: Date[];
  thursday: Date[];
  friday: Date[];
  weekend: Date[];

  constructor() { }

  ngOnInit(): void {
    this.dates = dates.getThisWeeksDates();
    this.monday = [this.dates[0]];
    this.tuesday = [this.dates[1]];
    this.wednesday = [this.dates[2]];
    this.thursday = [this.dates[3]];
    this.friday = [this.dates[4]];
    this.weekend = dates.getWeekendDates();
  }

}
