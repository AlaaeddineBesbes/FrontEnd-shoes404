import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Categorie_addPage } from './categorie-add.page';

describe('CategoriePage', () => {
  let component: Categorie_addPage;
  let fixture: ComponentFixture<Categorie_addPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Categorie_addPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Categorie_addPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
