import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataDisplayRoutingModule } from './data-display-routing.module';
import { DataDisplayComponent } from './data-display.component';
import { WssDataOutputComponent } from './wss-data-output/wss-data-output.component';


@NgModule({
  declarations: [
    DataDisplayComponent,
    WssDataOutputComponent
  ],
  imports: [
    CommonModule,
    DataDisplayRoutingModule
  ]
})
export class DataDisplayModule { }
