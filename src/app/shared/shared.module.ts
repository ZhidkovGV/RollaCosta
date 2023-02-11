import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './components/avatar/avatar.component';
import { WalletsBalanceComponent } from './components/wallets-balance/wallets-balance.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AvatarComponent, WalletsBalanceComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [AvatarComponent, WalletsBalanceComponent],
})
export class SharedModule {}
