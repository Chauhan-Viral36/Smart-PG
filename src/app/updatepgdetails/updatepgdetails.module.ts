import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatepgdetailsPageRoutingModule } from './updatepgdetails-routing.module';

import { UpdatepgdetailsPage } from './updatepgdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    UpdatepgdetailsPageRoutingModule
  ],
  declarations: [UpdatepgdetailsPage]
})
export class UpdatepgdetailsPageModule {}
