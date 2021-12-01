import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Produit_editPage } from './produit-edit.page';

const routes: Routes = [
  {
    path: '',
    component: Produit_editPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Produit_editPageRoutingModule {}
