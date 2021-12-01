import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Produit_editPage } from './produit-edit.page';

describe('Produit_editPage', () => {
  let component: Produit_editPage;
  let fixture: ComponentFixture<Produit_editPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Produit_editPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Produit_editPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
