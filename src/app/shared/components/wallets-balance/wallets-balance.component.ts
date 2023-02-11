import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Wallet } from '@app/shared/services/user.service';
import { Maybe } from '@app/shared/types/maybe';

@Component({
  selector: 'app-wallets-balance',
  templateUrl: './wallets-balance.component.html',
  styleUrls: ['./wallets-balance.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WalletsBalanceComponent implements OnInit {
  @Input() public wallets: Maybe<Wallet[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
