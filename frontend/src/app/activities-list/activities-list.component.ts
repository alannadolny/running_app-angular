import { activity } from './../activity';
import { ActivitiesService } from './../activities.service';
import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class ActivitiesListComponent implements OnInit {
  activities: activity[] = [];
  columnsToDisplay: string[] = ['Distance', 'Time', 'Burned kcal'];
  expandedElement?: activity | null;
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];

  round(number: number) {
    return Math.round(number * 100) / 100;
  }

  deleteActivity(id: string): void {
    this.activitiesService.deleteActivity(id).subscribe((v) => {
      this.activities = this.activities.filter((activity: activity) => {
        return activity._id !== v.deletedId;
      });
    });
  }

  getActivities(): void {
    this.activitiesService.getActivities().subscribe((data) => {
      this.activities = data.map((v) => {
        return {
          ...v,
          start: new Date(v.start),
          finish: new Date(v.finish),
        };
      });
    });
  }

  constructor(private activitiesService: ActivitiesService) {}

  ngOnInit(): void {
    this.getActivities();
  }
}
