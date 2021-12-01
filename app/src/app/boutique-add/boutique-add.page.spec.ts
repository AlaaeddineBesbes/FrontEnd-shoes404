import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Boutique_addPage } from './boutique-add.page';

describe('BoutiquePage', () => {
  let component: Boutique_addPage;
  let fixture: ComponentFixture<Boutique_addPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Boutique_addPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Boutique_addPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
