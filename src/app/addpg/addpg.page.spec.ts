import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddpgPage } from './addpg.page';

describe('AddpgPage', () => {
  let component: AddpgPage;
  let fixture: ComponentFixture<AddpgPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpgPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddpgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
