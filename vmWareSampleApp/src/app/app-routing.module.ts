import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'data-collect', pathMatch: 'full'},
  { path: 'data-collect', loadChildren: () => import('./data-collect/data-collect.module').then(m => m.DataCollectModule) }, 
  { path: 'data-display', loadChildren: () => import('./data-display/data-display.module').then(m => m.DataDisplayModule) },
  {path: '**', redirectTo: 'data-collect'}
]

  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
