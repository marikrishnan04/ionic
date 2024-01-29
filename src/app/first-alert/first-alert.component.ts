// first-alert.component.ts
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-first-alert',
  templateUrl: './first-alert.component.html',
  styleUrls: ['./first-alert.component.scss'],
})
export class FirstAlertComponent implements OnInit {

  constructor(private modalController: ModalController) {}
  isOpen = false;

  ngOnInit() {
    this.isOpen=true;
    // Logic to be executed when the component is first initialized
    console.log('FirstAlertComponent initialized');
  }
  slide1 = [
    { id: 1, image: 'https://st.depositphotos.com/1593759/2652/i/450/depositphotos_26521407-stock-photo-set-of-different-fruits-and.jpg' },
    { id: 2, image: 'https://st.depositphotos.com/1593759/2652/i/450/depositphotos_26521407-stock-photo-set-of-different-fruits-and.jpg' },
    { id: 3, image: 'https://st.depositphotos.com/1593759/2652/i/450/depositphotos_26521407-stock-photo-set-of-different-fruits-and.jpg' },
    { id: 4, image: 'https://st.depositphotos.com/1593759/2652/i/450/depositphotos_26521407-stock-photo-set-of-different-fruits-and.jpg' },
    { id: 5, image: 'https://st.depositphotos.com/1593759/2652/i/450/depositphotos_26521407-stock-photo-set-of-different-fruits-and.jpg' },
    { id: 6, image: 'https://st.depositphotos.com/1593759/2652/i/450/depositphotos_26521407-stock-photo-set-of-different-fruits-and.jpg' },
    // Add more slides as needed
  ];

  onSubmit() {
    this.closeModal();
  }

  async closeModal() {
    const modal = await this.modalController.getTop();
    if (modal) {
      modal.dismiss();
    }
  }
}
