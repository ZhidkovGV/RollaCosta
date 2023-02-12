import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoinsComponent {
  @Input() public coins!: number;
}
