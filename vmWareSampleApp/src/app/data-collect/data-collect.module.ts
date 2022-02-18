import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataCollectRoutingModule } from './data-collect-routing.module';
import { DataCollectComponent } from './data-collect.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DataCollectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DataCollectRoutingModule
  ]
})
export class DataCollectModule { }
