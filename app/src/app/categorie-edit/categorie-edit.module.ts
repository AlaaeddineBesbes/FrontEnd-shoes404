import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Categorie_editPage } from './categorie-edit.page';

const routes: Routes = [
  {
    path: '',
    component: Categorie_editPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Categorie_editPage]
})
export class Categorie_editPageModule {}
