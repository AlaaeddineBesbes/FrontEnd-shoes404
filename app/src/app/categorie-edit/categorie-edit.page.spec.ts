import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Categorie_editPage } from './categorie-edit.page';

describe('Categorie_editPage', () => {
  let component: Categorie_editPage;
  let fixture: ComponentFixture<Categorie_editPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Categorie_editPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Categorie_editPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
