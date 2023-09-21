import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresarProductoPageRoutingModule } from './ingresar-producto-routing.module';

import { IngresarProductoPage } from './ingresar-producto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresarProductoPageRoutingModule
  ],
  declarations: [IngresarProductoPage]
})
export class IngresarProductoPageModule {}
