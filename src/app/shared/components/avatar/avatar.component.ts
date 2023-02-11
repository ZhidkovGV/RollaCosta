import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Maybe } from '@app/shared/types/maybe';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
  @Input() public url: Maybe<string>;
  @Input() public placeholder: Maybe<string>;
}
