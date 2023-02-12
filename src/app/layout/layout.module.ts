import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@app/layout/header/header.component';
import { LayoutComponent } from '@app/layout/layout/layout.component';
import { NotFoundComponent } from '@app/layout/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [HeaderComponent, LayoutComponent, NotFoundComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    SharedModule,
    RouterModule,
    MatButtonModule
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
