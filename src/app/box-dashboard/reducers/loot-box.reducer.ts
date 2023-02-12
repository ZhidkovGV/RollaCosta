import { createReducer, on } from '@ngrx/store';
import {
  displayPrize,
  updateLootBoxesList,
} from '@app/box-dashboard/actions/loot-box.action';
import { LootBox } from '@app/box-dashboard/services/loot-box.service';

export const reduceLootBoxes = createReducer(
  {},
  on(updateLootBoxesList, (state, { lootBoxEdges }) => {
    const lootBoxes: LootBox[] = lootBoxEdges.map(
      ({ node: { id, name, cost, iconUrl } }) => ({
        id,
        name,
        cost,
        iconUrl,
      })
    );

    return { ...state, lootBoxes };
  }),
);
