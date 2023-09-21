import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: 'qr-code',
        loadChildren: () => import('./.././qr-code/qr-code.module').then( m => m.QrCodePageModule)
      },
      {
        path: 'buscar',
        loadChildren: () => import('./.././buscar/buscar.module').then( m => m.BuscarPageModule)
      },
      {
        path: 'ajustes',
        loadChildren: () => import('./.././ajustes/ajustes.module').then( m => m.AjustesPageModule)
      },
      {
        path: 'ingresar',
        loadChildren: () => import('./.././ingresar/ingresar.module').then( m => m.IngresarPageModule)
      },
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
