$(document).ready(function() {
  $('.hide').click(function() {
    $(this).hide();
  });
});

// Menu toggle-button

$(document).ready(function() {
  $('.menu-icon').on('click', function() {
    $('nav ul').toggleClass('showing');
  });
});

// Scrolling Effect

$(window).on('scroll', function() {
  if ($(window).scrollTop()) {
    $('nav').addClass('black');
  } else {
    $('nav').removeClass('black');
  }
});

$('.menu').on('click', function() {
  $(this).toggleClass('active');
  $('.overlay').toggleClass('menu-open');
});

$('.nav a').on('click', function() {
  $('.menu').removeClass('active');
  $('.overlay').removeClass('menu-open');
});

// scroll top button
$(document).ready(function(){
  $(window).scroll(function(){
    if ($(this).scrollTop() > 40) {
      $('#topBtn').fadeIn();
    } else {
      $('#topBtn').fadeOut();
    }
  });

  $('#topBtn').click(function(){
    $('html, body').animate({ scrollTop: 0}, 800);
  });
});