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


  // Simple Modal
  $('.ladyhawke').on('click', function() {
    $('.modalBG').show();
  });
  $('.modalBG').click(function(){
    $('.modalBG').hide();
  });
});


