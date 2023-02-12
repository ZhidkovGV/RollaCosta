import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LOOT_BOX_ACTIONS } from '@app/box-dashboard/actions/loot-box.action';
import { LootBox } from '@app/box-dashboard/services/loot-box.service';

export const lootBoxFeatureSelector = createFeatureSelector<{
  lootBoxes: LootBox[];
}>(LOOT_BOX_ACTIONS.UPDATE_LOOT_BOXES_LIST);

export const selectLootBoxes = createSelector(
  lootBoxFeatureSelector,
  (state: { lootBoxes: LootBox[] }) => state.lootBoxes
);
