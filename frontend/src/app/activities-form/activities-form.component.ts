import { ActivitiesService } from './../activities.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  ValidationErrors,
  AbstractControl,
} from '@angular/forms';
import { activity } from '../activity';
@Component({
  selector: 'app-activities-form',
  templateUrl: './activities-form.component.html',
  styleUrls: ['./activities-form.component.scss'],
})
export class ActivitiesFormComponent implements OnInit {
  // submit(
  //   distance: string,
  //   start: string,
  //   finish: string,
  //   avgSpeed: string,
  //   kcalBurned: string
  // ): void {
  //   if (
  //     this.compare(start) &&
  //     this.compare(finish) &&
  //     new Date(finish) > new Date(start)
  //   )
  //     this.service
  //       .postActivity({
  //         distance: parseInt(distance),
  //         start: new Date(start),
  //         finish: new Date(finish),
  //         avgSpeed: parseInt(avgSpeed),
  //         kcalBurned: parseInt(kcalBurned),
  //       })
  //       .subscribe((_) => {
  //         this.location.back();
  //       });
  // }

  onSubmit(): void {
    if (this.activityForm.status === 'VALID')
      this.service.postActivity(this.activityForm.value).subscribe((_) => {
        this.location.back();
      });
  }

  activityForm: FormGroup = new FormGroup({
    distance: new FormControl('', [
      Validators.required,
      Validators.pattern('^[1-9][0-9]*.?[0-9]*'),
    ]),
    avgSpeed: new FormControl('', [
      Validators.required,
      Validators.pattern('^[1-9][0-9]*.?[0-9]*'),
    ]),
    kcalBurned: new FormControl('', [
      Validators.required,
      Validators.pattern('^[1-9][0-9]*.?[0-9]*'),
    ]),
    start: new FormControl('', [Validators.required, this.DateValidator()]),
    finish: new FormControl('', [Validators.required, this.DateValidator()]),
  });

  DateValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const invalid = new Date() < new Date(control.value);
      return invalid ? { beforeToday: { value: control.value } } : null;
    };
  }

  undo(): void {
    this.location.back();
  }

  constructor(private location: Location, private service: ActivitiesService) {}

  ngOnInit(): void {}
}
