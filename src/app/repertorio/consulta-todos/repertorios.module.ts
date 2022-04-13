import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepertoriosPageRoutingModule } from './repertorios-routing.module';

import { RepertoriosPage } from './repertorios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepertoriosPageRoutingModule
  ],
  declarations: [RepertoriosPage]
})
export class RepertoriosPageModule {}
