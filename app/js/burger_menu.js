$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger, .header__menu').toggleClass('active');
      $('body').toggleClass('lock'); // remove scroll when burger menu is active
   });

   $('.header__menu').click(function () {
      $('.header__burger, .header__menu').removeClass('active');
      $('body').removeClass('lock'); // close burger menu after click
   });
});