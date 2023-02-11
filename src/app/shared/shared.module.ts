import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './components/avatar/avatar.component';
import { WalletsBalanceComponent } from './components/wallets-balance/wallets-balance.component';



@NgModule({
  declarations: [
    AvatarComponent,
    WalletsBalanceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
