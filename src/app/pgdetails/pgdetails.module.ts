import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PgdetailsPageRoutingModule } from './pgdetails-routing.module';

import { PgdetailsPage } from './pgdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PgdetailsPageRoutingModule
  ],
  declarations: [PgdetailsPage]
})
export class PgdetailsPageModule {}
