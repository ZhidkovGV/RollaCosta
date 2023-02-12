import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private envService: EnvService
  ) {}

  public login(): void {
    this.document.location.href = this.envService.getLoginUrl();
  }
}
