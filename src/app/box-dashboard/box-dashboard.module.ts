import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxDashboardComponent } from './box-dashboard/box-dashboard.component';
import { BoxCardComponent } from './box-card/box-card.component';



@NgModule({
  declarations: [
    BoxDashboardComponent,
    BoxCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BoxDashboardModule { }
