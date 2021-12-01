import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-boutique-add',
  templateUrl: './boutique-add.page.html',
  styleUrls: ['./boutique-add.page.scss'],
})
export class Boutique_addPage implements OnInit {

  private boutique : FormGroup;
  api : RestService;
  

  constructor(public restapi: RestService, 
    public loadingController: LoadingController, 
    private route: ActivatedRoute, 
    public router : Router,
    public formBuilder: FormBuilder) {
      this.boutique = this.formBuilder.group({
        title: [''],
        description: [''],
      });

    this.api = restapi;

  }

  async saveBoutique(){
    await this.api.createBoutique(this.boutique.value)
    .subscribe(res => {
        console.log(res);
        this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
      });
  }

  

  save() {
    console.log(this.boutique.value);
    this.saveBoutique();

  }


  ngOnInit() {
    
  }
}
