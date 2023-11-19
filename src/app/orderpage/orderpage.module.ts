import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderpagePageRoutingModule } from './orderpage-routing.module';

import { OrderpagePage } from './orderpage.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderpagePageRoutingModule
  ],
  declarations: [OrderpagePage]
})
export class OrderpagePageModule {}
