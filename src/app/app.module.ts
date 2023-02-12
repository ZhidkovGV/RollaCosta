import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserEffects } from '@app/shared/effects/user.effect';
import { reduceCurrentUser } from '@app/shared/reducers/update-current-user.reducer';
import { UPDATE_CURRENT_USER_ACTION } from '@app/shared/actions/update-current-user.action';
import { LayoutModule } from '@app/layout/layout.module';
import { LootBoxEffects } from '@app/box-dashboard/effects/loot-box.effect';
import { LOOT_BOX_ACTIONS } from '@app/box-dashboard/actions/loot-box.action';
import { reduceLootBoxes } from '@app/box-dashboard/reducers/loot-box.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    StoreModule.forRoot(
      {
        [UPDATE_CURRENT_USER_ACTION]: reduceCurrentUser,
        [LOOT_BOX_ACTIONS.UPDATE_LOOT_BOXES_LIST]: reduceLootBoxes,
      },
      {}
    ),
    EffectsModule.forRoot([UserEffects, LootBoxEffects]),
    BrowserAnimationsModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
