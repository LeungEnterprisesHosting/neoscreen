if(window.location.href.indexOf("about") !== -1 || window.location.href.indexOf("contact") !== -1 || $(window).width() < 768) {
  $('.navbar').css('background', '#111');
  $('.navbar').css('border-bottom', '0');
} else {
  var half = $(window).height() / 2;

  $(window).scroll(function() {
    if ($(window).scrollTop() >= half) {
      $('.navbar').css('background', '#111');
      $('.navbar').css('border-bottom', '0');
    } else {
      $('.navbar').css('background', '');
      $('.navbar').css('border-bottom', '');
    }
  });
  $('.navbar').hover(function() {
    $('.navbar').css('background', '#111');
    $('.navbar').css('border-bottom', '0');
  }, function() {
    if ($(window).scrollTop() < half) {
      $('.navbar').css('background', '');
      $('.navbar').css('border-bottom', '');
    }
  });
}

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

var sidebarMenu = $('.sidebar-menu');
$('.navbar-toggle').click(function() {
  if (!sidebarMenu.hasClass('open')) {
    sidebarMenu.addClass('open');
    $('.overlay').addClass('show')
  }
})

$('.overlay').click(function() {
  if (sidebarMenu.hasClass('open')) {
    sidebarMenu.removeClass('open');
    $('.overlay').removeClass('show');
  }
})
