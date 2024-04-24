// description.page.ts
import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-description',
  templateUrl: './description.page.html',
  styleUrls: ['./description.page.scss'],
})
export class DescriptionPage implements OnInit {

  activeSlideIndex: number = 0; // Track the active slide index
  count:number = 0
  slide1 = [
    { id: 1, image: 'https://img.freepik.com/free-vector/peach-from-pomona-italiana-illustration_53876-64296.jpg' },
    { id: 2, image: 'https://media.istockphoto.com/id/1168754631/photo/flying-fresh-ripe-peach-with-green-leaves-isolated.jpg?s=612x612&w=0&k=20&c=u1xx9JMHVRyDmnbud4XvSuuY1rgn27VMZAPw9U9CngY=' },
    { id: 3, image: 'https://www.eatingwell.com/thmb/HbB24ZskZvMdC0ZuGywIgE2nkew=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8-Sweet-Fruits-That-Will-Satisfy-Your-Sugar-Cravings-09baf3b022574dcbaf1a20804666b009.jpg' },
    // Add more slides as needed
  ];
  increment() {
    this.count++;
   }

   decrement() {
     if (this.count > 0) {
       this.count--;
     }
   }
  ngOnInit() {

    // Initialize Swiper

  }

  initializeSwiper() {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 0,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      on: {
        slideChange: () => {
          this.activeSlideIndex = swiper.activeIndex;
        },
      },
    });
  }

  // Function to handle circular button click
  onCircularButtonClick(index: number) {
    this.activeSlideIndex = index;
    // Use Swiper API to change the active slide
    var swiper = new Swiper('.swiper-container');
    swiper.slideTo(index);
  }
}
