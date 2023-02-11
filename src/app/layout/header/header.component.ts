import { Component, Inject } from '@angular/core';
import { EnvService } from '@app/shared/services/env.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(@Inject(DOCUMENT) private document: Document, private envService: EnvService) {}

  public login(): void {
    this.document.location.href = this.envService.getLoginUrl();
  }
}
