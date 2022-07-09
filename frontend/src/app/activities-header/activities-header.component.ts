import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities-header',
  templateUrl: './activities-header.component.html',
  styleUrls: ['./activities-header.component.scss'],
})
export class ActivitiesHeaderComponent implements OnInit {
  days: string[] = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    '-',
  ];

  currentDay: string = this.days[7];

  getCurrentDay(): void {
    const dayNumber: number = new Date().getDay();
    this.currentDay = this.days[dayNumber];
  }

  constructor() {}

  ngOnInit(): void {
    this.getCurrentDay();
  }
}
