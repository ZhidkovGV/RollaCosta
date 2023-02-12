import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { getLootBoxList } from '@app/box-dashboard/actions/loot-box.action';
import { selectLootBoxes } from '@app/box-dashboard/selectors/loot-box.selector';
import { LootBox } from '@app/box-dashboard/services/loot-box.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-box-dashboard',
  templateUrl: './box-dashboard.component.html',
  styleUrls: ['./box-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxDashboardComponent implements OnInit {
  public lootBoxes$ = this.store.select(selectLootBoxes);
  constructor(private store: Store<{ lootBoxes: LootBox[] }>) {}

  public ngOnInit(): void {
    this.store.dispatch(getLootBoxList());
  }
}
