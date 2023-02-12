import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Prize } from '@app/box-dashboard/services/loot-box.service';

@Component({
  selector: 'app-prize-modal',
  templateUrl: './prize-modal.component.html',
  styleUrls: ['./prize-modal.component.scss'],
})
export class PrizeModalComponent {
  public readonly prize: Prize;
  constructor(
    private dialogRef: MatDialogRef<PrizeModalComponent>,
    @Inject(MAT_DIALOG_DATA) data: { prize: Prize }
  ) {
    this.prize = data.prize;
  }

  public closeModal(): void {
    return this.dialogRef.close();
  }
}
