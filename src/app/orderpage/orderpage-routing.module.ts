import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderpagePage } from './orderpage.page';

const routes: Routes = [
  {
    path: '',
    component: OrderpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderpagePageRoutingModule {}
