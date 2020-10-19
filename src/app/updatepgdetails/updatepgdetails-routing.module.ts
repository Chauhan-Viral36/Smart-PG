import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatepgdetailsPage } from './updatepgdetails.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatepgdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatepgdetailsPageRoutingModule {}
