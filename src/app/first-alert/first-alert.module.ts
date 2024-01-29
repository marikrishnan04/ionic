// first-alert.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FirstAlertComponent } from './first-alert.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    FirstAlertComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    SwiperModule,
  ],
})
export class FirstAlertModule { }
