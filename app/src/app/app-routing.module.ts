import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'boutique/:id',
    loadChildren: () => import('./boutique/boutique.module').then( m => m.BoutiquePageModule)
  },
  {
    path: 'boutique-edit/:id',
    loadChildren: () => import('./boutique-edit/boutique-edit.module').then( m => m.Boutique_editPageModule)
  },
  {
    path: 'boutique-add',
    loadChildren: () => import('./boutique-add/boutique-add.module').then( m => m.Boutique_addPageModule)
  },
  {
    path: 'categorie/:id',
    loadChildren: () => import('./categorie/categorie.module').then( m => m.CategoriePageModule)
  },
  {
    path: 'categorie-edit/:id',
    loadChildren: () => import('./categorie-edit/categorie-edit.module').then( m => m.Categorie_editPageModule)
  },
  {
    path: 'categorie-add/:id',
    loadChildren: () => import('./categorie-add/categorie-add.module').then( m => m.Categorie_addPageModule)
  },
  {
    path: 'produit/:id',
    loadChildren: () => import('./produit/produit.module').then( m => m.ProduitPageModule)
  },
  {
    path: 'produit-edit/:id',
    loadChildren: () => import('./produit-edit/produit-edit.module').then( m => m.Produit_editPageModule)
  },
  {
    path: 'produit-add/:id',
    loadChildren: () => import('./produit-add/produit-add.module').then( m => m.Produit_addPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
