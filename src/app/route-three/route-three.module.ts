import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteThreeRoutingModule } from './route-three-routing.module';
import { RouteThreeComponent } from './route-three.component';
import { CompOneComponent } from './comp-one/comp-one.component';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { CompThreeComponent } from './comp-three/comp-three.component';
import { CompFourComponent } from './comp-four/comp-four.component';


@NgModule({
  declarations: [RouteThreeComponent, CompOneComponent, CompTwoComponent, CompThreeComponent, CompFourComponent],
  imports: [
    CommonModule,
    RouteThreeRoutingModule
  ]
})
export class RouteThreeModule { }
