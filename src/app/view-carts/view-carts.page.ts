import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-carts',
  templateUrl: './view-carts.page.html',
  styleUrls: ['./view-carts.page.scss'],
})
export class ViewCartsPage implements OnInit {

  constructor(private router: Router) { }

  count:number = 0

  ngOnInit() {
  }
  increment() {
    this.count++;
   }

   decrement() {
     if (this.count > 0) {
       this.count--;
     }

   }
gobill(){
  this.router.navigate(['/bill-details']);
}
}
