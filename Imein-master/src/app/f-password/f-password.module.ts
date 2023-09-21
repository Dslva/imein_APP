import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FPasswordPageRoutingModule } from './f-password-routing.module';

import { FPasswordPage } from './f-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FPasswordPageRoutingModule
  ],
  declarations: [FPasswordPage]
})
export class FPasswordPageModule {}
