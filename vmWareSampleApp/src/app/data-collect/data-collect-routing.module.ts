import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataCollectComponent } from './data-collect.component';

const routes: Routes = [{ path: '', component: DataCollectComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataCollectRoutingModule { }
