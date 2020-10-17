import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SettingpgPage } from './settingpg.page';

describe('SettingpgPage', () => {
  let component: SettingpgPage;
  let fixture: ComponentFixture<SettingpgPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingpgPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SettingpgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
