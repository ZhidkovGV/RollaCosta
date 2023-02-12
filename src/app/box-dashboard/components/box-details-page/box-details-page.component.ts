import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getLootBoxList } from '@app/box-dashboard/actions/loot-box.action';
import { selectLootBoxes } from '@app/box-dashboard/selectors/loot-box.selector';
import { LootBox } from '@app/box-dashboard/services/loot-box.service';
import { Store } from '@ngrx/store';
import { propEq } from 'ramda';
import { filter, Observable } from 'rxjs';
import { map, withLatestFrom } from 'rxjs';

const isIdEqual = propEq('id');


@Component({
  selector: 'app-box-details-page',
  templateUrl: './box-details-page.component.html',
  styleUrls: ['./box-details-page.component.scss'],
})
export class BoxDetailsPageComponent implements OnInit {
  public readonly box$: Observable<LootBox>;

  constructor(private route: ActivatedRoute, private store: Store) {
    const boxId$ = this.route.paramMap.pipe(map((params) => params.get('id')));

    this.box$ = store.select(selectLootBoxes).pipe(
      withLatestFrom(boxId$),
      map(([boxes, id]) => {
        return boxes?.find(isIdEqual(id))
      }),
      filter((box): box is LootBox => !!box)
    );

    this.store.dispatch(getLootBoxList());
  }

  public ngOnInit(): void {}
}
