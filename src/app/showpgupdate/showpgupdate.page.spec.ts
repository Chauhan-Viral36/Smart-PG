import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowpgupdatePage } from './showpgupdate.page';

describe('ShowpgupdatePage', () => {
  let component: ShowpgupdatePage;
  let fixture: ComponentFixture<ShowpgupdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowpgupdatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowpgupdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
