import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxDashboardComponent } from '@app/box-dashboard/components/box-dashboard/box-dashboard.component';
import { BoxCardComponent } from '@app/box-dashboard/components/box-card/box-card.component';
import { BoxDashboardRoutingModule } from '@app/box-dashboard/box-dashboard-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '@app/shared/shared.module';
import { TotalWalletBalancePipe } from '@app/shared/pipes/total-wallet-balance.pipe';
@NgModule({
  declarations: [BoxDashboardComponent, BoxCardComponent],
  imports: [
    CommonModule,
    BoxDashboardRoutingModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule,
    SharedModule,
  ],
  providers: [TotalWalletBalancePipe],
})
export class BoxDashboardModule {}
