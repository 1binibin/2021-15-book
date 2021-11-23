var y = window.innerHeight;

window.addEventListener('scroll', function () {
  console.log(y, this.scrollY);
  if (window.scrollY >= y) {
    $('.navi-wrapper').addClass('active');
  } else {
    $('.navi-wrapper').removeClass('active');
  }
});

// AOS.init({ once: false });
