import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YourorderPageRoutingModule } from './yourorder-routing.module';

import { YourorderPage } from './yourorder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YourorderPageRoutingModule
  ],
  declarations: [YourorderPage]
})
export class YourorderPageModule {}
