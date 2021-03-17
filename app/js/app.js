// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
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

   // And if we need scrollbar
   scrollbar: {
      el: '.swiper-scrollbar',
   },
});

const swiperTips = new Swiper('#swiper-container_tips', {
   // Optional parameters
   loop: true,
   slidesPerView: 3,
   slidesPerGroup: 3,
   spaceBetween: 30,
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

document.addEventListener('DOMContentLoaded', () => {
   var a = document.getElementById('dropdown-button_1');

   a.onclick = function () {
      document.getElementById("myDropdown_1").classList.toggle("show");
      return false;
   }

   var a = document.getElementById('dropdown-button_2');

   a.onclick = function () {
      document.getElementById("myDropdown_2").classList.toggle("show");
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

// https://coderoad.ru/11978995/%D0%9A%D0%B0%D0%BA-%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B8%D1%82%D1%8C-%D1%86%D0%B2%D0%B5%D1%82-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F-SVG-%D1%81-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C%D1%8E-CSS-%D0%B7%D0%B0%D0%BC%D0%B5%D0%BD%D0%B0-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F-jQuery-SVG

// $(document).ready(function() {
//    $('img[src$=".svg"]').each(function() {
//        var $img = jQuery(this);
//        var imgURL = $img.attr('src');
//        var attributes = $img.prop("attributes");

//        $.get(imgURL, function(data) {
//            // Get the SVG tag, ignore the rest
//            var $svg = jQuery(data).find('svg');

//            // Remove any invalid XML tags
//            $svg = $svg.removeAttr('xmlns:a');

//            // Loop through IMG attributes and apply on SVG
//            $.each(attributes, function() {
//                $svg.attr(this.name, this.value);
//            });

//            // Replace IMG with SVG
//            $img.replaceWith($svg);
//        }, 'xml');
//    });
// });

