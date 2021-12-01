import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Boutique_editPage } from './boutique-edit.page';

const routes: Routes = [
  {
    path: '',
    component: Boutique_editPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Boutique_editPageRoutingModule {}
