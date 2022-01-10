import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-boutique-edit',
  templateUrl: './boutique-edit.page.html',
  styleUrls: ['./boutique-edit.page.scss'],
})
export class Boutique_editPage implements OnInit {
  boutique : any;
  categories : any;
  api : RestService;
  title : string;
  description : string;
  boutiqueID : string;

  constructor(public restapi: RestService, 
    public loadingController: LoadingController, 
    private route: ActivatedRoute, 
    public router : Router) {

    this.api = restapi;

  }

  async getBoutique(id:any) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getBoutique(this.boutiqueID)
      .subscribe(res => {
        console.log(res);
        this.boutique = res;
        this.title = this.boutique.title;
        this.description = this.boutique.description;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });

  }

  async saveBoutique(){
    await this.api.updateBoutique(this.boutique._id, this.boutique)
    .subscribe(res => {
        console.log(res);
        this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
      });
  }

  async deleteBoutique(){
    await this.api.deleteBoutique(this.boutique._id)
    .subscribe(res => {
        console.log(res);
        this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
      });
  }

  async getCategories() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getCategories(this.boutiqueID)
      .subscribe(res => {
        console.log(res);
        this.categories = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });

  }

  save() {

    console.log(this.description);
    console.log(this.title);
    console.log(this.boutique.boutiqueID);

    this.boutique.title = this.title;
    this.boutique.description = this.description;
    this.boutique.

    this.saveBoutique();

  }

  delete() {

    this.deleteBoutique();
    
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap)=> {
      this.boutiqueID=params.get('id');
    });
    this.getCategories();
    console.log("Current id: " + this.boutiqueID);
    this.getBoutique(this.boutiqueID);
    
  }
}
