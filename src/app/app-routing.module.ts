import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'orderpage',
    pathMatch: 'full'
  },
  {
    path: 'orderpage',
    loadChildren: () => import('./orderpage/orderpage.module').then( m => m.OrderpagePageModule)
  },
  {
    path: 'viewproducts',
    loadChildren: () => import('./viewproducts/viewproducts.module').then( m => m.ViewproductsPageModule)
  },
  {
    path: 'view-carts',
    loadChildren: () => import('./view-carts/view-carts.module').then( m => m.ViewCartsPageModule)
  },
  {
    path: 'bill-details',
    loadChildren: () => import('./bill-details/bill-details.module').then( m => m.BillDetailsPageModule)
  },
  {
    path: 'address',
    loadChildren: () => import('./address/address.module').then( m => m.AddressPageModule)
  },
  {
    path: 'editaddress',
    loadChildren: () => import('./editaddress/editaddress.module').then( m => m.EditaddressPageModule)
  },

  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'yourorder',
    loadChildren: () => import('./yourorder/yourorder.module').then( m => m.YourorderPageModule)
  },
  {
    path: 'description',
    loadChildren: () => import('./description/description.module').then( m => m.DescriptionPageModule)
  },







];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
