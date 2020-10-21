import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowpgupdatePageRoutingModule } from './showpgupdate-routing.module';

import { ShowpgupdatePage } from './showpgupdate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowpgupdatePageRoutingModule
  ],
  declarations: [ShowpgupdatePage]
})
export class ShowpgupdatePageModule {}
