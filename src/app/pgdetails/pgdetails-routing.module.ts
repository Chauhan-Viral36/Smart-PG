import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PgdetailsPage } from './pgdetails.page';

const routes: Routes = [
  {
    path: '',
    component: PgdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PgdetailsPageRoutingModule {}
