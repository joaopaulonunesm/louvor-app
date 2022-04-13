import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultaRepertorioPageRoutingModule } from './consulta-repertorio-routing.module';

import { ConsultaRepertorioPage } from './consulta-repertorio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultaRepertorioPageRoutingModule
  ],
  declarations: [ConsultaRepertorioPage]
})
export class ConsultaRepertorioPageModule {}
