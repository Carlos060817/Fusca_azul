import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstoqueFiltrosPageRoutingModule } from './estoque-filtros-routing.module';

import { EstoqueFiltrosPage } from './estoque-filtros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstoqueFiltrosPageRoutingModule
  ],
  declarations: [EstoqueFiltrosPage]
})
export class EstoqueFiltrosPageModule {}
