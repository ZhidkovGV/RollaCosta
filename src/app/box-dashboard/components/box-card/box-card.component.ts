import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { openLootBox } from '@app/box-dashboard/actions/loot-box.action';
import { LootBox } from '@app/box-dashboard/services/loot-box.service';
import { selectCurrentUser } from '@app/shared/selectors/user.selector';
import { User } from '@app/shared/services/user.service';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-box-card',
  templateUrl: './box-card.component.html',
  styleUrls: ['./box-card.component.scss'],
})
export class BoxCardComponent {
  @Input() public box!: LootBox;

  public readonly isUserLoggedIn$ = this.store
    .select(selectCurrentUser)
    .pipe(map((user) => !!user));

  constructor(private store: Store<{ currentUser: User }>, private router: Router) {}

  public openBox(): void {
    this.store.dispatch(openLootBox({ lootBoxId: this.box.id }));
  }

  public viewBox(): void {
    this.router.navigate([this.box.id])
  }
}
