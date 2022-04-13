import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultaMusicaPageRoutingModule } from './consulta-musica-routing.module';

import { ConsultaMusicaPage } from './consulta-musica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultaMusicaPageRoutingModule
  ],
  declarations: [ConsultaMusicaPage]
})
export class ConsultaMusicaPageModule {}
