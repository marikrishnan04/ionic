import { Component, OnInit} from '@angular/core';
import Swiper from 'swiper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.page.html',
  styleUrls: ['./viewproducts.page.scss'],
})
export class ViewproductsPage implements OnInit {

  isSearchBarOpen = false;
  closeicon=true;
  cancelicon=false;
  searchQuery: string = '';
  constructor(private router: Router) {}

  image: any;
  name: any;
  count:number = 0

  slides = [
    { id: 1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfpZB0_3qGRT0vx7Jlw662goIgQc9en4esg&usqp=CAU' },
    { id: 2, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN9bUCNCOYWj4sEYJ2k-4wF-NgDWYytM1sog&usqp=CAU' },
    { id: 3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNEU8jng4qYUNybPdBZn9cSUeQSBLzIreQcw&usqp=CAU' },
    // Add more slides as needed
  ];
  goViewCarts() {

    this.router.navigate(['/view-carts']); // Replace 'view-carts' with the actual route of your new page

  }

  ngOnInit() {
    this.initializeSwiper();
    this.retrieveProductDetails();
  }

  private initializeSwiper() {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }

  private retrieveProductDetails() {
    console.log(localStorage.getItem('product'));
    this.image = localStorage.getItem('product');
    this.name = localStorage.getItem('productName');
  }

  increment() {
   this.count++;
  }

  decrement() {
    if (this.count > 0) {
      this.count--;
    }
  }
  visible:boolean = false

  openpopup(){
    this.visible = true;
    console.log("hello");

  }
  closepopup(){
    this.visible =!this.visible;
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
