import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataDisplayRoutingModule } from './data-display-routing.module';
import { DataDisplayComponent } from './data-display.component';


@NgModule({
  declarations: [
    DataDisplayComponent
  ],
  imports: [
    CommonModule,
    DataDisplayRoutingModule
  ]
})
export class DataDisplayModule { }
