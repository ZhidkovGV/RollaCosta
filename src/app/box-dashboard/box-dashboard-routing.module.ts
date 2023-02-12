import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxDashboardComponent } from '@app/box-dashboard/components/box-dashboard/box-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: BoxDashboardComponent,
    // children: [
    //     { path: '/:id', component: BoxDashboardComponent },
    // ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoxDashboardRoutingModule {}
