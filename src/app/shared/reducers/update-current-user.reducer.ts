import { createReducer, on } from '@ngrx/store';
import { updateCurrentUser } from '@app/shared/actions/update-current-user.action';

export const reduceCurrentUser = createReducer(
  {},
  on(updateCurrentUser, (state, { userResponse }) => {
    return { ...state, currentUser: userResponse.data?.currentUser };
  })
);
