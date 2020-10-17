import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { RegisterPage } from './register.page';
import { HttpClientModule } from '@angular/common/http'; 
import { from } from 'rxjs';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RegisterPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
