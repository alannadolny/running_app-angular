import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesChartsComponent } from './activities-charts.component';

describe('ActivitiesChartsComponent', () => {
  let component: ActivitiesChartsComponent;
  let fixture: ComponentFixture<ActivitiesChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitiesChartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivitiesChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
