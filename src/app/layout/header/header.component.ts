import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { EnvService } from '@app/shared/services/env.service';
import { DOCUMENT } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from '@app/shared/selectors/user.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public readonly currentUser$ = this.store.select(selectCurrentUser);
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private envService: EnvService,
    private store: Store
  ) {}

  public login(): void {
    this.document.location.href = this.envService.getLoginUrl();
  }
}
