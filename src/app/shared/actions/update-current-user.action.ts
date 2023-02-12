import { createAction, props } from '@ngrx/store';
import { UserResponse } from '@app/shared/services/user.service';
import { ApolloQueryResult } from '@apollo/client/core/types';


export const UPDATE_CURRENT_USER_ACTION = '[User] Update Current User';

export const updateCurrentUser = createAction(
  UPDATE_CURRENT_USER_ACTION,
  props<{ userResponse: ApolloQueryResult<UserResponse> }>()
);
