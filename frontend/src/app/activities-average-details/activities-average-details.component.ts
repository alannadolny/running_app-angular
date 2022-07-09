import { ActivitiesService } from './../activities.service';
import { Component, OnInit } from '@angular/core';
import { activity } from '../activity';

@Component({
  selector: 'app-activities-average-details',
  templateUrl: './activities-average-details.component.html',
  styleUrls: ['./activities-average-details.component.scss'],
})
export class ActivitiesAverageDetailsComponent implements OnInit {
  avgDistance: number = 0;
  avgTime: number = 0;
  avgBurnedKcal: number = 0;
  avgSpeed: number = 0;

  round(number: number) {
    return Math.round(number * 100) / 100;
  }

  getData(): void {
    this.service.getActivities().subscribe((v) => {
      this.avgDistance =
        v.reduce((prev, curr) => prev + curr.distance, 0) / v.length;
      this.avgTime = v.reduce((prev, curr) => prev + curr.time!, 0) / v.length;
      this.avgBurnedKcal =
        v.reduce((prev, curr) => prev + curr.kcalBurned, 0) / v.length;
      this.avgSpeed =
        v.reduce((prev, curr) => prev + curr.avgSpeed, 0) / v.length;
    });
  }

  constructor(private service: ActivitiesService) {}

  ngOnInit(): void {
    this.getData();
  }
}
