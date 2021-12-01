import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Boutique_addPage } from './boutique-add.page';

const routes: Routes = [
  {
    path: '',
    component: Boutique_addPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Boutique_addPageRoutingModule {}
