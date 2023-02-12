import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { openLootBox } from '@app/box-dashboard/actions/loot-box.action';
import { LootBox } from '@app/box-dashboard/services/loot-box.service';
import { TotalWalletBalancePipe } from '@app/shared/pipes/total-wallet-balance.pipe';
import { selectCurrentUser } from '@app/shared/selectors/user.selector';
import { User } from '@app/shared/services/user.service';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-box-card',
  templateUrl: './box-card.component.html',
  styleUrls: ['./box-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxCardComponent {
  @Input() public box!: LootBox;

  public readonly isUserLoggedIn$ = this.store
    .select(selectCurrentUser)
    .pipe(map((user) => !!user));

  public isUserFundsSufficient$ = this.store
    .select(selectCurrentUser)
    .pipe(map((user) => this.walletsPipe.transform(user) >= this.box.cost));

  constructor(
    private store: Store<{ currentUser: User }>,
    private walletsPipe: TotalWalletBalancePipe
  ) {}

  public openBox(): void {
    this.store.dispatch(openLootBox({ lootBoxId: this.box.id }));
  }
}
