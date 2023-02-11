import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  private readonly env = environment

  constructor() { }

  public getLoginUrl(): string {
    return this.env.loginUrl;
  }

  public getGraphQlUrl(): string {
    return this.env.graphQLUrl;
  }
}
