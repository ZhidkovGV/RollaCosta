import { Injectable } from '@angular/core';
import { Edge } from '@app/shared/types/edge';
import { Apollo, gql, MutationResult } from 'apollo-angular';
import { Observable } from 'rxjs';

export type LootBox = {
  id: string;
  name: string;
  iconUrl: string;
  cost: number;
};

export type LootBoxResponse = {
  boxes: {
    edges: Edge<LootBox>[];
  };
};

export type Prize = {
  iconUrl: string;
  name: string;
  value: number;
};

export type BoxOpeningResponse = {
  openBox: {
    boxOpenings: [
      {
        id: string;
        itemVariant: Prize;
      }
    ];
  }
};

@Injectable({
  providedIn: 'root',
})
export class LootBoxService {
  constructor(private client: Apollo) {}

  public readonly lootBoxList$ = this.client.query<LootBoxResponse>({
    query: gql`
      query {
        boxes(free: false, purchasable: true, openable: true) {
          edges {
            node {
              id
              name
              iconUrl
              cost
            }
          }
        }
      }
    `,
  });

  public openLootBox(boxId: string): Observable<MutationResult<BoxOpeningResponse>> {
    return this.client.mutate({
      mutation: gql`
        mutation OpenBox($input: OpenBoxInput!) {
          openBox(input: $input) {
            boxOpenings {
              id
              itemVariant {
                id
                name
                value
                iconUrl
              }
            }
          }
        }
      `,
      variables: {
        input: {
          boxId,
          amount: 1,
        },
      },
    });
  }
}
