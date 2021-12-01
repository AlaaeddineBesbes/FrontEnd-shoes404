import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Categorie_addPage } from './categorie-add.page';

const routes: Routes = [
  {
    path: '',
    component: Categorie_addPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Categorie_addPageRoutingModule {}
