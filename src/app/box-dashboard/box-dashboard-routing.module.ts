import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxDashboardComponent } from '@app/box-dashboard/components/box-dashboard/box-dashboard.component';
import { BoxDetailsPageComponent } from '@app/box-dashboard/components/box-details-page/box-details-page.component';

const routes: Routes = [
  {
    path: '',
    component: BoxDashboardComponent,
  },
  {
    path: ':id',
    component: BoxDetailsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoxDashboardRoutingModule {}
