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
  closeicon = true;
  cancelicon = false;
  searchQuery: string = '';
  image='https://freedesignfile.com/upload/2016/09/Creative-fruit-background-vector-graphic-01.jpg'


  constructor(private router: Router ) {} // Inject the AlertController

  goViewproducts(data?: any, name?: any) {
    localStorage.setItem('productName', name);
    localStorage.setItem('product', data);
    this.router.navigate(['/viewproducts']); // Replace 'viewproducts' with the actual route of your new page
  }

  slides = [
    { id: 1, image: 'https://freedesignfile.com/upload/2016/09/Creative-fruit-background-vector-graphic-01.jpg' },
    { id: 2, image: 'https://freedesignfile.com/upload/2016/09/Creative-fruit-background-vector-graphic-01.jpg' },
    { id: 3, image: 'https://freedesignfile.com/upload/2016/09/Creative-fruit-background-vector-graphic-01.jpg' },
    { id: 4, image: 'https://freedesignfile.com/upload/2016/09/Creative-fruit-background-vector-graphic-01.jpg' },
    { id: 5, image: 'https://freedesignfile.com/upload/2016/09/Creative-fruit-background-vector-graphic-01.jpg' },
    { id: 6, image: 'https://freedesignfile.com/upload/2016/09/Creative-fruit-background-vector-graphic-01.jpg' },
    // Add more slides as needed
  ];
  slide1 = [
    { id: 1, image: 'https://st.depositphotos.com/1593759/2652/i/450/depositphotos_26521407-stock-photo-set-of-different-fruits-and.jpg' },
    { id: 2, image: 'https://st.depositphotos.com/1593759/2652/i/450/depositphotos_26521407-stock-photo-set-of-different-fruits-and.jpg' },
    { id: 3, image: 'https://st.depositphotos.com/1593759/2652/i/450/depositphotos_26521407-stock-photo-set-of-different-fruits-and.jpg' },
    { id: 4, image: 'https://st.depositphotos.com/1593759/2652/i/450/depositphotos_26521407-stock-photo-set-of-different-fruits-and.jpg' },
    { id: 5, image: 'https://st.depositphotos.com/1593759/2652/i/450/depositphotos_26521407-stock-photo-set-of-different-fruits-and.jpg' },
    { id: 6, image: 'https://st.depositphotos.com/1593759/2652/i/450/depositphotos_26521407-stock-photo-set-of-different-fruits-and.jpg' },
    // Add more slides as needed
  ];

  cancelSearch() {
    this.cancelicon = false;
    this.isSearchBarOpen = false;
    this.closeicon = true;
  }

  openSearch() {
    this.isSearchBarOpen = true;
    this.closeicon = false;
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

  async ngOnInit() {

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
