import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

export type Wallet = {
  id: string;
  amount: number;
  currency: string;
};

export type User = {
  id: string;
  name: string;
  wallets: Wallet[];
  avatar?: string;
};

export type UserResponse = {
  currentUser: User;
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private client: Apollo) {}

  public readonly user$ = this.client.query({
    query: gql<UserResponse, void>`
      {
        currentUser {
          id
          name
          avatar
          wallets {
            id
            amount
            currency
          }
        }
      }
    `,
  });
}
