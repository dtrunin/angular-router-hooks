import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { FooComponent } from './foo.component';
import {AppGuard} from "../app.guard";

const routes: Route[] = [
  {
    path: '',
    component: FooComponent,
    data: { meta: 'foo_component' },
    canActivate: [AppGuard],
    children: [
      {
        path: 'bar',
        loadChildren: () => import('./bar/bar.module').then((m) => m.BarModule),
        data: { meta: 'bar' },
        canActivate: [AppGuard],
        canLoad: [AppGuard]
      },
      {
        path: 'baz',
        loadChildren: () => import('./baz/baz.module').then((m) => m.BazModule),
        data: { meta: 'baz' },
      },
      {
        path: '',
        redirectTo: 'bar',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FooRoutingModule {}
