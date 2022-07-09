import { activity } from './../activity';
import { ActivitiesService } from './../activities.service';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-activities-charts',
  templateUrl: './activities-charts.component.html',
  styleUrls: ['./activities-charts.component.scss'],
})
export class ActivitiesChartsComponent implements OnInit {
  distanceData: any;
  burnedKcalData: any;
  timeData: any;
  avgSpeedData: any;
  basicOptions: any;
  labels: string[] = [];
  distances: number[] = [];
  burnedKcal: number[] = [];
  times: number[] = [];
  avgSpeeds: number[] = [];
  getActivities(): void {
    this.service.getActivities().subscribe((v: activity[]) => {
      v = _.sortBy(v, 'start');
      this.labels = v.map((el: activity) => el.start.toString().split('T')[0]);
      this.distances = v.map((el: activity) => el.distance);
      this.burnedKcal = v.map((el: activity) => el.kcalBurned);
      this.times = v.map((el: activity) => Math.round(el.time! / 36000) / 100);
      this.avgSpeeds = v.map((el: activity) => el.avgSpeed);
      this.distanceData = {
        labels: this.labels,
        datasets: [
          {
            label: 'Distance',
            data: this.distances,
            fill: false,
            borderColor: '#5488cc',
            tension: 0.4,
          },
        ],
      };
      this.timeData = {
        labels: this.labels,
        datasets: [
          {
            label: 'Time',
            data: this.times,
            fill: false,
            borderColor: '#243c5c',
            tension: 0.4,
          },
        ],
      };
      this.avgSpeedData = {
        labels: this.labels,
        datasets: [
          {
            label: 'Avg speed',
            data: this.avgSpeeds,
            backgroundColor: '#4290f5',
          },
        ],
      };
      this.burnedKcalData = {
        labels: this.labels,
        datasets: [
          {
            label: 'Burned kcal',
            data: this.burnedKcal,
            backgroundColor: '#0f53ab',
          },
        ],
      };
      this.basicOptions = {
        plugins: {
          legend: {
            labels: {
              color: '#495057',
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: '#495057',
            },
            grid: {
              color: '#ebedef',
            },
          },
          y: {
            ticks: {
              color: '#495057',
              ticks: {
                min: 0,
              },
            },
            grid: {
              color: '#ebedef',
            },
          },
        },
      };
    });
  }

  constructor(private service: ActivitiesService) {}

  ngOnInit(): void {
    this.getActivities();
  }
}
