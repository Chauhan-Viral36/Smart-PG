import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddpgPageRoutingModule } from './addpg-routing.module';

import { AddpgPage } from './addpg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddpgPageRoutingModule
  ],
  declarations: [AddpgPage]
})
export class AddpgPageModule {}
