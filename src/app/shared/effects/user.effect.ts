import { inject, Injectable } from '@angular/core';
import {
  Actions,
  createEffect,
  ofType,
  ROOT_EFFECTS_INIT,
} from '@ngrx/effects';
import { UserService } from '@app/shared/services/user.service';
import { map, switchMap } from 'rxjs';
import { updateCurrentUser } from '@app/shared/actions/update-current-user.action';

@Injectable()
export class UserEffects {
  public readonly currentUserEffect = createEffect(() => {
    const actions$: Actions = inject(Actions);
    const userService: UserService = inject(UserService);

    return actions$.pipe(
      ofType(ROOT_EFFECTS_INIT),
      switchMap(() => userService.currentUser$),
      map((response) => updateCurrentUser({ userResponse: response }))
    );
  });
}
