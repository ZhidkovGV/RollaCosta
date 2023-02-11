import { createReducer, on } from '@ngrx/store';
import { updateCurrentUserAction } from '../actions/update-current-user.action';
import { UserResponse } from '../services/user.service';

export type Store = {
  currentUser: UserResponse;
};

export const updateCurrentUserReducer = createReducer(
  {},
  on(updateCurrentUserAction, (state, { userResponse }) => {
    return { ...state, currentUser: userResponse.data?.currentUser };
  })
);
