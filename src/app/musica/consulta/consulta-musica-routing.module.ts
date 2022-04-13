import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaMusicaPage } from './consulta-musica.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaMusicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaMusicaPageRoutingModule {}
