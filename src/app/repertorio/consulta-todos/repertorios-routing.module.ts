import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepertoriosPage } from './repertorios.page';

const routes: Routes = [
  {
    path: '',
    component: RepertoriosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepertoriosPageRoutingModule {}
