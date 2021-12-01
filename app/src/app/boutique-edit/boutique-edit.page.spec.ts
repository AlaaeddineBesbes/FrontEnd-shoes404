import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Boutique_editPage } from './boutique-edit.page';

describe('BoutiquePage', () => {
  let component: Boutique_editPage;
  let fixture: ComponentFixture<Boutique_editPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Boutique_editPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Boutique_editPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
