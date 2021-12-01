import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Boutique_editPage } from './boutique-edit.page';

const routes: Routes = [
  {
    path: '',
    component: Boutique_editPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Boutique_editPage]
})
export class Boutique_editPageModule {}
