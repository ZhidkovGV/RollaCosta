import { createAction, props } from '@ngrx/store';
import { BoxOpeningResponse, LootBox, Prize } from '@app/box-dashboard/services/loot-box.service';
import { Edge } from '@app/shared/types/edge';
import { MutationResult } from 'apollo-angular';

export const LOOT_BOX_ACTIONS = Object.freeze({
  GET_LOOT_BOX_LIST: '[LootBox] get list of loot boxes',
  GET_LOOT_BOX: '[LootBox] get loot box',
  UPDATE_LOOT_BOXES_LIST: '[LootBox] update local list of loot boxes',
  OPEN_LOOT_BOX: '[LootBox] open loot box',
  DISPLAY_PRIZE: '[LootBox] display prize',
});

export type LOOT_BOX_ACTIONS =
  typeof LOOT_BOX_ACTIONS[keyof typeof LOOT_BOX_ACTIONS];

export const getLootBoxList = createAction(LOOT_BOX_ACTIONS.GET_LOOT_BOX_LIST);

export const updateLootBoxesList = createAction(
  LOOT_BOX_ACTIONS.UPDATE_LOOT_BOXES_LIST,
  props<{ lootBoxEdges: Edge<LootBox>[] }>()
);

export const openLootBox = createAction(
  LOOT_BOX_ACTIONS.OPEN_LOOT_BOX,
  props<{ lootBoxId: string }>()
);

export const displayPrize = createAction(
  LOOT_BOX_ACTIONS.DISPLAY_PRIZE,
  props<{ prize: MutationResult<BoxOpeningResponse> }>(),
);
