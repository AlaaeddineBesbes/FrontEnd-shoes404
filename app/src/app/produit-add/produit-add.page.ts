import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-produit-add',
  templateUrl: './produit-add.page.html',
  styleUrls: ['./produit-add.page.scss'],
})
export class Produit_addPage implements OnInit {

  private produit: FormGroup;
  api: RestService;
  id: string;
  title: string;
  description: string;
  prix: string;


  constructor(public restapi: RestService,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public router: Router,
    public formBuilder: FormBuilder) {
    this.produit = this.formBuilder.group({
      categorieID: [this.id],
      title: [''],
      prix: ['20'],
      description: [''],
    });
    this.api = restapi;

  }

  async saveProduit() {
    await this.api.createProduit(this.produit.value)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
      });
  }



  save() {
    console.log(this.id);
    this.description = this.produit.value.description;
    this.title = this.produit.value.title;
    this.prix = this.produit.value.prix;
    console.log(this.description);
    this.produit.setValue({ categorieID: this.id, title: this.title, description: this.description, prix: this.prix })
    console.log(this.produit.value);


    this.saveProduit();

  }


  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
  }
}
