import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from '@app/shared/selectors/user.selector';
import { AuthService } from '@app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public readonly currentUser$ = this.store.select(selectCurrentUser);

  constructor(
    private store: Store,
    private authService: AuthService
  ) {}

  public login(): void {
    this.authService.login();
  }
}
