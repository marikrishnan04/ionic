import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-carts',
  templateUrl: './view-carts.page.html',
  styleUrls: ['./view-carts.page.scss'],
})
export class ViewCartsPage implements OnInit {
  isSearchBarOpen = false;
  closeicon=true;
  cancelicon=false;
  searchQuery: string = '';

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
cancelSearch(){
  this.cancelicon = false;
  this.isSearchBarOpen = false;
  this.closeicon=true;
}
openSearch() {
  this.isSearchBarOpen = true;
  this.closeicon=false
  this.cancelicon = true;
}
closeSearch() {
  this.isSearchBarOpen = false;
  // You can perform additional actions when closing the search bar
}

clearSearch() {
  this.searchQuery = '';
  // You can perform additional actions when clearing the search query
}
}
