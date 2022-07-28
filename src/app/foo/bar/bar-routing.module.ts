import { NgModule } from '@angular/core';
import { BarComponent } from './bar.component';
import { Route, RouterModule } from '@angular/router';
import {AppGuard} from "../../app.guard";

const routes: Route[] = [
  {
    path: '',
    component: BarComponent,
    data: { meta: 'bar_component' },
    canActivate: [AppGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarRoutingModule { }
