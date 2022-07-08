import { ActivitiesFormComponent } from './activities-form/activities-form.component';
import { ActivitiesListComponent } from './activities-list/activities-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ActivitiesListComponent,
  },
  {
    path: 'form',
    component: ActivitiesFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
