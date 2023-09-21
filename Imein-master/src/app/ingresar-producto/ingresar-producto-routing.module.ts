import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresarProductoPage } from './ingresar-producto.page';

const routes: Routes = [
  {
    path: '',
    component: IngresarProductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresarProductoPageRoutingModule {}
