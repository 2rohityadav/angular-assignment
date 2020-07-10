import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteThreeComponent } from './route-three.component';

const routes: Routes = [{ path: '', component: RouteThreeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteThreeRoutingModule { }
