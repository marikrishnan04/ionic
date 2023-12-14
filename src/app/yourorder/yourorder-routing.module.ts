import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YourorderPage } from './yourorder.page';

const routes: Routes = [
  {
    path: '',
    component: YourorderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourorderPageRoutingModule {}
