import { ActivitiesService } from './../activities.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-activities-form',
  templateUrl: './activities-form.component.html',
  styleUrls: ['./activities-form.component.scss'],
})
export class ActivitiesFormComponent implements OnInit {
  submit(
    distance: string,
    start: string,
    finish: string,
    avgSpeed: string,
    kcalBurned: string
  ): void {
    if (
      this.compare(start) &&
      this.compare(finish) &&
      new Date(finish) > new Date(start)
    )
      this.service
        .postActivity({
          distance: parseInt(distance),
          start: new Date(start),
          finish: new Date(finish),
          avgSpeed: parseInt(avgSpeed),
          kcalBurned: parseInt(kcalBurned),
        })
        .subscribe((_) => {
          this.location.back();
        });
  }

  compare(startDate: string): boolean {
    return new Date() > new Date(startDate);
  }

  undo(): void {
    this.location.back();
  }

  constructor(private location: Location, private service: ActivitiesService) {}

  ngOnInit(): void {}
}
