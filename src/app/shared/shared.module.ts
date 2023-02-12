import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AvatarComponent } from '@app/shared/components/avatar/avatar.component';
import { CoinsComponent } from '@app/shared/components/coins/coins.component';
import { TotalWalletBalancePipe } from '@app/shared//pipes/total-wallet-balance.pipe';
import { PrizeModalComponent } from '@app/shared//components/prize-modal/prize-modal.component';

@NgModule({
  declarations: [
    AvatarComponent,
    CoinsComponent,
    TotalWalletBalancePipe,
    PrizeModalComponent,
  ],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatDialogModule],
  exports: [AvatarComponent, CoinsComponent, TotalWalletBalancePipe],
})
export class SharedModule {}
