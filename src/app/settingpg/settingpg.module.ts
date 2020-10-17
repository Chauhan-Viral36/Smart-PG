import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingpgPageRoutingModule } from './settingpg-routing.module';

import { SettingpgPage } from './settingpg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingpgPageRoutingModule
  ],
  declarations: [SettingpgPage]
})
export class SettingpgPageModule {}
