import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstoqueFiltrosPage } from './estoque-filtros.page';

const routes: Routes = [
  {
    path: '',
    component: EstoqueFiltrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstoqueFiltrosPageRoutingModule {}
