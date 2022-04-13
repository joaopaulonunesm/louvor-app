import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaRepertorioPage } from './consulta-repertorio.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaRepertorioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaRepertorioPageRoutingModule {}
