import { Injectable } from '@angular/core';
import { activity, deletedActivity } from './activity';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActivitiesService {
  getActivities(): Observable<activity[]> {
    return this.http.get<activity[]>('http://localhost:5000/activities/');
  }

  postActivity(activity: activity): Observable<activity> {
    return this.http.post<activity>(
      'http://localhost:5000/activities/',
      activity
    );
  }

  deleteActivity(id: string): Observable<deletedActivity> {
    return this.http.delete<deletedActivity>(
      `http://localhost:5000/activities/${id}`
    );
  }

  constructor(private http: HttpClient) {}
}
