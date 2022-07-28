import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AppGuard} from "./app.guard";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // canActivate: [AppGuard],
    canActivateChild: [AppGuard],
    canLoad: [AppGuard],
    data: { meta: 'home' },
  },
  {
    path: 'foo',
    loadChildren: () => import('./foo/foo.module').then((m) => m.FooModule),
    // canActivate: [AppGuard],
    canActivateChild: [AppGuard],
    canLoad: [AppGuard],
    data: { meta: 'foo' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
