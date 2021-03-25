// Import jQuery module (npm i jquery)
import $ from 'jquery'
// import Swiper JS
import Swiper from 'swiper';

// core version + navigation, pagination modules:
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination]);

const swiperIntro = new Swiper('#swiper-container_intro', {
   // Optional parameters
   loop: true,
   slidesPerView: 1.5,
   spaceBetween: 35,
   centeredSlides: true,
   lazyLoading: true,

   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});

const swiperInspiration = new Swiper('#swiper_inspiration', {
   // Optional parameters
   loop: true,
   slidesPerView: 1.5,
   spaceBetween: 30,
   lazyLoading: true,

   // Responsive breakpoints
   breakpoints: {
      575: {
        slidesPerView: 2.5
      }
   },
 
   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
   },
 
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 
   // And if we need scrollbar
   scrollbar: {
     el: '.swiper-scrollbar',
   },
});

const swiperTips = new Swiper('#swiper-container_tips', {
   // Optional parameters
   loop: true,
   slidesPerView: 1,
   spaceBetween: 30,
   lazyLoading: true,

   // Responsive breakpoints
   breakpoints: {
      575: {
        slidesPerView: 2,
        slidesPerGroup: 2
      },

      991: {
         slidesPerView: 3,
         slidesPerGroup: 3
      }
   },

   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});

const swiperOurProducts = new Swiper('#our-products__slider_mobile', {
   // Optional parameters
   loop: true,
   slidesPerView: 1,
   lazyLoading: true,
  
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 
});

document.addEventListener('DOMContentLoaded', () => {
   const dropbtnHeader1 = document.getElementById('dropdown-button_1');

   dropbtnHeader1.onclick = function () {
      document.getElementById("myDropdown_1").classList.toggle("show");
      return false;
   }

   const dropbtnHeader2 = document.getElementById('dropdown-button_2');

   dropbtnHeader2.onclick = function () {
      document.getElementById("myDropdown_2").classList.toggle("show");
      return false;
   }

   const dropbtnFooter1 = document.getElementById('dropdown-button_3');

   dropbtnFooter1.onclick = function () {
      document.getElementById("myDropdown_3").classList.toggle("show");
      return false;
   }

   const dropbtnFooter2 = document.getElementById('dropdown-button_4');

   dropbtnFooter2.onclick = function () {
      document.getElementById("myDropdown_4").classList.toggle("show");
      return false;
   }

   const dropbtnFooter3 = document.getElementById('dropdown-button_5');

   dropbtnFooter3.onclick = function () {
      document.getElementById("myDropdown_5").classList.toggle("show");
      return false;
   }
})


window.onclick = function (event) {
   if (!event.target.matches('.dropbtn')) {

      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
         var openDropdown = dropdowns[i];
         if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
         }
      }
   }
}

