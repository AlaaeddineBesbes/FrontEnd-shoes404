import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Produit_addPage } from './produit-add.page';

describe('ProduitPage', () => {
  let component: Produit_addPage;
  let fixture: ComponentFixture<Produit_addPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Produit_addPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Produit_addPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
