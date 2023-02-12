import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './components/avatar/avatar.component';
import { CoinsComponent } from './components/wallets-balance/coins.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TotalWalletBalancePipe } from './pipes/total-wallet-balance.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import { PrizeModalComponent } from './components/prize-modal/prize-modal.component';

@NgModule({
  declarations: [AvatarComponent, CoinsComponent, TotalWalletBalancePipe, PrizeModalComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatDialogModule],
  exports: [AvatarComponent, CoinsComponent, TotalWalletBalancePipe],
})
export class SharedModule {}
