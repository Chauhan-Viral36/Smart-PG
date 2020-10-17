import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddpgPage } from './addpg.page';

const routes: Routes = [
  {
    path: '',
    component: AddpgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddpgPageRoutingModule {}
