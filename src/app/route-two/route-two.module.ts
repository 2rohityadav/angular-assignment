import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { RouteTwoRoutingModule } from './route-two-routing.module';
import { RouteTwoComponent } from './route-two.component';


@NgModule({
  declarations: [RouteTwoComponent],
  imports: [
    CommonModule,
    RouteTwoRoutingModule,
    HttpClientModule
  ]
})
export class RouteTwoModule { }
