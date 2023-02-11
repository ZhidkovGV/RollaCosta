import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserEffects } from '@app/shared/effects/current-user.effect';
import { updateCurrentUserReducer } from '@app/shared/reducers/update-current-user.reducer';
import { UPDATE_CURRENT_USER_ACTION } from '@app/shared/actions/update-current-user.action';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    StoreModule.forRoot(
      { [UPDATE_CURRENT_USER_ACTION]: updateCurrentUserReducer },
      {}
    ),
    EffectsModule.forRoot([UserEffects]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
