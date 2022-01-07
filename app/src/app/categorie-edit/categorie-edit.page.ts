import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-categorie-edit',
  templateUrl: './categorie-edit.page.html',
  styleUrls: ['./categorie-edit.page.scss'],
})
export class Categorie_editPage implements OnInit {
  categorie : any;
  produits : any;
  api : RestService;
  id : string;
  title : string;
  description : string;
  categorieID : string;

  constructor(public restapi: RestService, 
    public loadingController: LoadingController, 
    private route: ActivatedRoute, 
    public router : Router) {

    this.api = restapi;

  }

  async getCategorie(id:any) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getCategorie(this.id)
      .subscribe(res => {
        console.log(res);
        this.categorie = res;
        this.title = this.categorie.title;
        this.description = this.categorie.description;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });

  }

  async saveCategorie(){
    await this.api.updateCategorie(this.categorie._id, this.categorie)
    .subscribe(res => {
        console.log(res);
        this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
      });
  }

  async deleteCategorie(){
    await this.api.deleteCategorie(this.categorie._id)
    .subscribe(res => {
        console.log(res);
        this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
      });
  }

  async getProduits() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getProduits(this.id)
      .subscribe(res => {
        console.log(res);
        this.produits = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });

  }

  save() {

    console.log(this.description);
    console.log(this.title);
    console.log(this.categorie._id);

    this.categorie.title = this.title;
    this.categorie.description = this.description;

    this.saveCategorie();

  }

  delete() {

    this.deleteCategorie();
    
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap)=> {
      this.id=params.get('id');
    });
    this.getProduits();
    console.log("Current id: " + this.id);
    this.getCategorie(this.id);
    
  }
}
