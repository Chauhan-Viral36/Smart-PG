import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowpgupdatePage } from './showpgupdate.page';

const routes: Routes = [
  {
    path: '',
    component: ShowpgupdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowpgupdatePageRoutingModule {}
