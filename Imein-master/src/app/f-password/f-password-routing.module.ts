import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FPasswordPage } from './f-password.page';

const routes: Routes = [
  {
    path: '',
    component: FPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FPasswordPageRoutingModule {}
