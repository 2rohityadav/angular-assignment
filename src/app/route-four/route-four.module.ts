import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteFourRoutingModule } from './route-four-routing.module';
import { RouteFourComponent } from './route-four.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';


@NgModule({
  declarations: [RouteFourComponent, OneComponent, TwoComponent, ThreeComponent, FourComponent],
  imports: [
    CommonModule,
    RouteFourRoutingModule
  ]
})
export class RouteFourModule { }
