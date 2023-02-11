import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '@app/app.component';
import { NotFoundComponent } from '@app/layout/not-found/not-found.component';
import { LayoutComponent } from './layout/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () =>
          import('@app/layout/layout.module').then((m) => m.LayoutModule),
        component: LayoutComponent,
      },
    ],
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('@app/box-dashboard/box-dashboard.module').then(
        (m) => m.BoxDashboardModule
      ),
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
