import { createAction, props } from '@ngrx/store';
import { UserResponse } from '@app/shared/services/user.service';
import { SubscriptionResult } from 'apollo-angular';

export const UPDATE_CURRENT_USER_ACTION = '[User] Update Current User';

export const updateCurrentUserAction = createAction(
  UPDATE_CURRENT_USER_ACTION,
  props<{ userResponse: SubscriptionResult<UserResponse> }>()
);
