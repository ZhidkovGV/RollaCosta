import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  getLootBoxList,
  openLootBox,
} from '@app/box-dashboard/actions/loot-box.action';
import { selectLootBoxes } from '@app/box-dashboard/selectors/loot-box.selector';
import { LootBox } from '@app/box-dashboard/services/loot-box.service';
import { TotalWalletBalancePipe } from '@app/shared/pipes/total-wallet-balance.pipe';
import { selectCurrentUser } from '@app/shared/selectors/user.selector';
import { Store } from '@ngrx/store';
import { propEq } from 'ramda';
import { filter, Observable } from 'rxjs';
import { map, withLatestFrom } from 'rxjs';

const isIdEqual = propEq('id');

@Component({
  selector: 'app-box-details-page',
  templateUrl: './box-details-page.component.html',
  styleUrls: ['./box-details-page.component.scss'],
})
export class BoxDetailsPageComponent {
  public readonly box$: Observable<LootBox>;
  public isUserFundsSufficient$: Observable<boolean>;
  public readonly isUserLoggedIn$ = this.store
    .select(selectCurrentUser)
    .pipe(map((user) => !!user));

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private walletsPipe: TotalWalletBalancePipe
  ) {
    const boxId$ = this.route.paramMap.pipe(map((params) => params.get('id')));

    this.box$ = store.select(selectLootBoxes).pipe(
      withLatestFrom(boxId$),
      map(([boxes, id]) => {
        return boxes?.find(isIdEqual(id));
      }),
      filter((box): box is LootBox => !!box)
    );

    this.store.dispatch(getLootBoxList());

    this.isUserFundsSufficient$ = this.getIsUserFundsSufficient$();
  }

  public openBox(boxId: string): void {
    this.store.dispatch(openLootBox({ lootBoxId: boxId }));
  }

  private getIsUserFundsSufficient$(): Observable<boolean> {
    return this.store.select(selectCurrentUser).pipe(
      withLatestFrom(this.box$),
      map(([user, box]) => this.walletsPipe.transform(user) >= box.cost)
    );
  }
}
