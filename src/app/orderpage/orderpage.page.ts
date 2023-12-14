// orderpage.page.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swiper from 'swiper';

@Component({
  selector: 'app-orderpage',
  templateUrl: './orderpage.page.html',
  styleUrls: ['./orderpage.page.scss'],
})
export class OrderpagePage implements OnInit {
  isSearchBarOpen = false;
  closeicon=true;
  cancelicon=false;
  searchQuery: string = '';

  constructor(private router: Router) {}

  goViewproducts(data?:any,name?:any) {
    localStorage.setItem('productName',name)
    localStorage.setItem('product',data)
    this.router.navigate(['/viewproducts']); // Replace 'viewproducts' with the actual route of your new page

  }
  slides = [
    { id: 1, image: 'https://freedesignfile.com/upload/2016/09/Creative-fruit-background-vector-graphic-01.jpg' },
    { id: 2, image: 'https://freedesignfile.com/upload/2016/09/Creative-fruit-background-vector-graphic-01.jpg' },
    { id: 3, image: 'https://freedesignfile.com/upload/2016/09/Creative-fruit-background-vector-graphic-01.jpg' },
    // Add more slides as needed
  ];
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

  ngOnInit() {
    // Initialize Swiper
    var swiper = new Swiper('.swiper-container', {
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


}
