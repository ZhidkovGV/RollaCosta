import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { PrizeModalComponent } from '@app/shared/components/prize-modal/prize-modal.component';
import { Prize } from '@app/box-dashboard/services/loot-box.service';

@Injectable({
  providedIn: 'root',
})
export class PrizeModalService {
  constructor(private matDialog: MatDialog) {}

  public openPrizeModal(prize: Prize): Observable<void> {
    return this.matDialog
      .open(PrizeModalComponent, { data: { prize } })
      .afterClosed();
  }
}
