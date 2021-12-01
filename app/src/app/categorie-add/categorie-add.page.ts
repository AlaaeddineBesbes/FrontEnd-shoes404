import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-categorie-add',
  templateUrl: './categorie-add.page.html',
  styleUrls: ['./categorie-add.page.scss'],
})
export class Categorie_addPage implements OnInit {

  private categorie : FormGroup;
  private categorie2 : FormGroup;
  api : RestService;
  id : string;
  title : string;
  description : string;
  

  constructor(public restapi: RestService, 
    public loadingController: LoadingController, 
    private route: ActivatedRoute, 
    public router : Router,
    public formBuilder: FormBuilder) {
      this.categorie = this.formBuilder.group({
        boutiqueID: [this.id] ,
        title: [''],
        description: [''],
      });
    this.api = restapi;

  }

  async saveCategorie(){
    await this.api.createCategorie(this.categorie.value)
    .subscribe(res => {
        console.log(res);
        this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
      });
  }

  

  save() {
    console.log(this.id);
    this.description = this.categorie.value.description;
    this.title = this.categorie.value.title;
    console.log(this.description);
    this.categorie.setValue({boutiqueID: this.id, title: this.title, description: this.description})
    console.log(this.categorie.value);
    

    this.saveCategorie();

  }


  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap)=> {
      this.id=params.get('id');
    });
  }
}
