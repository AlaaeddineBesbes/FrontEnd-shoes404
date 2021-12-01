import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Categorie_editPage } from './categorie-edit.page';

const routes: Routes = [
  {
    path: '',
    component: Categorie_editPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Categorie_editPageRoutingModule {}
