import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { OrderpagePageModule } from '../orderpage/orderpage.module';

const routes: Routes = [


  {
    path: 'orderpage',
    loadChildren: () => import('../orderpage/orderpage.module').then( m => m.OrderpagePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
