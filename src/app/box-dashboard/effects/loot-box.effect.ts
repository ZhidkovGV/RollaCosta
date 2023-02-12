import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map, switchMap, tap } from 'rxjs';
import {
  displayPrize,
  LOOT_BOX_ACTIONS,
  updateLootBoxesList,
} from '@app/box-dashboard/actions/loot-box.action';
import {
  LootBoxService,
  Prize,
} from '@app/box-dashboard/services/loot-box.service';
import { PrizeModalService } from '@app/shared/services/prize-modal.service';
import { Maybe } from '@app/shared/types/maybe';
import { path } from 'ramda';

const pluckPrizeFromResponse = path<Maybe<Prize>>([
  'prize',
  'data',
  'openBox',
  'boxOpenings',
  0,
  'itemVariant',
]);
const isPrize = (prize: Maybe<Prize>): prize is Prize => !!prize;

@Injectable()
export class LootBoxEffects {
  public readonly currentUserEffect = createEffect(() => {
    const actions$: Actions = inject(Actions);
    const lootBoxService: LootBoxService = inject(LootBoxService);

    return actions$.pipe(
      ofType(LOOT_BOX_ACTIONS.GET_LOOT_BOX_LIST),
      switchMap(() => lootBoxService.lootBoxList$),
      map((response) => {
        return updateLootBoxesList({ lootBoxEdges: response.data.boxes.edges });
      })
    );
  });

  public readonly openLootBoxEffect = createEffect(() => {
    const actions$: Actions = inject(Actions);
    const lootBoxService: LootBoxService = inject(LootBoxService);

    return actions$.pipe(
      ofType(LOOT_BOX_ACTIONS.OPEN_LOOT_BOX),
      switchMap(({ lootBoxId }) => lootBoxService.openLootBox(lootBoxId)),
      map((response) => displayPrize({ prize: response }))
    );
  });

  public readonly openPrizeModalEffect = createEffect(
    () => {
      const actions$: Actions = inject(Actions);
      const lootBoxService: PrizeModalService = inject(PrizeModalService);
      return actions$.pipe(
        ofType(displayPrize),
        map(pluckPrizeFromResponse),
        tap(console.log),
        filter(isPrize),
        switchMap((prize) => {
          return lootBoxService.openPrizeModal(prize);
        })
      );
    },
    { dispatch: false }
  );
}
