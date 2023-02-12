import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map, switchMap, tap } from 'rxjs';
import {
  displayPrize,
  LOOT_BOX_ACTIONS,
  updateLootBoxesList,
} from '@app/box-dashboard/actions/loot-box.action';
import { LootBoxService } from '@app/box-dashboard/services/loot-box.service';
import { PrizeModalService } from '@app/shared/services/prize-modal.service';

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
        filter(({ prize }) => !!prize.data?.openBox.boxOpenings[0]?.itemVariant),
        switchMap(({ prize }) => {
          return lootBoxService.openPrizeModal(
            prize.data!.openBox.boxOpenings[0]!.itemVariant
          );
        })
      );
    },
    { dispatch: false }
  );
}
