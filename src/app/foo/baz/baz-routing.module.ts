import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { BazComponent } from './baz.component';

const routes: Route[] = [
  {
    path: '',
    component: BazComponent,
    data: { meta: 'baz_component' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BazRoutingModule {}
