import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteFourComponent } from './route-four.component';

const routes: Routes = [{ path: '', component: RouteFourComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteFourRoutingModule { }
