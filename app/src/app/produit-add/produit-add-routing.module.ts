import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Produit_addPage } from './produit-add.page';

const routes: Routes = [
  {
    path: '',
    component: Produit_addPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Produit_addPageRoutingModule {}
