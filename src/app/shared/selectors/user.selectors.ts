import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UPDATE_CURRENT_USER_ACTION } from '@app/shared/actions/update-current-user.action';
import { User } from '@app/shared/services/user.service';

export const userFeatureSelector = createFeatureSelector<{currentUser: User}>(UPDATE_CURRENT_USER_ACTION);

export const selectCurrentUser = createSelector(
  userFeatureSelector,
  (state: {currentUser: User}) => state.currentUser
);
