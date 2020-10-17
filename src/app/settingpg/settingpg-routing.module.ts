import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingpgPage } from './settingpg.page';

const routes: Routes = [
  {
    path: '',
    component: SettingpgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingpgPageRoutingModule {}
