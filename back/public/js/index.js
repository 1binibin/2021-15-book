window.addEventListener('scroll', function () {
  if (window.scrollY > 650) {
    $('.navi-wrapper').stop().hide();
    $('.navi-wrapper').stop().slideDown();
    $('.navi-wrapper').addClass('active');
  } else {
    $('.navi-wrapper').removeClass('active');
  }
});

AOS.init({ once: false });
