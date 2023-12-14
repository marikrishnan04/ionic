import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YourhistoryPage } from './yourhistory.page';

const routes: Routes = [
  {
    path: '',
    component: YourhistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourhistoryPageRoutingModule {}
