import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonToggle } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {
  data:any
  @ViewChild('toggle', { static: true }) toggleItem: any;
  lastStatus: boolean = false;

  constructor(private router: Router, private alertController: AlertController) {}

  ngOnInit() {
    this.data={}
    this.data.name="your Name"
    this.data.phone=12345678910

  }

  goeditaddress(){
   localStorage.setItem("data",this.data)
    this.router.navigate(['/editaddress'])
  }

  async presentAlert() {
    const alert = await this.alertController.create({

      message: 'Your order is placed',
      buttons: [
     {
          text: 'Okay',
          id: 'confirm-button',
          handler: () => {
            this.toggleItem.checked = !this.lastStatus;
            this.lastStatus = this.toggleItem.checked;
            this.router.navigate(['/orderpage'])
          }
        }
      ]
    });

    await alert.present();
  }

}
