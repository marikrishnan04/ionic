import { Component, OnInit,Input } from '@angular/core';
import { Gesture, GestureController } from '@ionic/angular';



@Component({
  selector: 'app-productmodalpopup',
  templateUrl: './productmodalpopup.component.html',
  styleUrls: ['./productmodalpopup.component.scss'],
})
export class ProductmodalpopupComponent  implements OnInit {
  constructor(private gestureCtrl: GestureController) {}

  @Input() isOpen = false;


  ngOnInit() {}
  onGesture(event: any) {
    if (event.deltaY > 0) {
      // Swipe down
      this.isOpen = false;
    } else {
      // Swipe up
      this.isOpen = true;
    }
  }
}
