import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicaPage } from './musica.page';

import { MusicaPageRoutingModule } from './musica-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicaPageRoutingModule
  ],
  declarations: [MusicaPage]
})
export class MusicaPageModule {}
