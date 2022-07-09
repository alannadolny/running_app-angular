import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesAverageDetailsComponent } from './activities-average-details.component';

describe('ActivitiesAverageDetailsComponent', () => {
  let component: ActivitiesAverageDetailsComponent;
  let fixture: ComponentFixture<ActivitiesAverageDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitiesAverageDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivitiesAverageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
