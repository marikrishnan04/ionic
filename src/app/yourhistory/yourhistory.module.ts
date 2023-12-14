import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YourhistoryPageRoutingModule } from './yourhistory-routing.module';

import { YourhistoryPage } from './yourhistory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YourhistoryPageRoutingModule
  ],
  declarations: [YourhistoryPage]
})
export class YourhistoryPageModule {}
