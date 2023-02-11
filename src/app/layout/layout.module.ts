import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@app/layout/header/header.component';
import { LayoutComponent } from '@app/layout/layout/layout.component';
import { NotFoundComponent } from '@app/layout/not-found/not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, LayoutComponent, NotFoundComponent],
  imports: [CommonModule, RouterModule],
})
export class LayoutModule {}
