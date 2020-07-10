import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteFiveComponent } from './route-five.component';

const routes: Routes = [{ path: '', component: RouteFiveComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteFiveRoutingModule { }
