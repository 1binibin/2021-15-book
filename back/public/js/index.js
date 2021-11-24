var y = window.innerHeight;
window.addEventListener('scroll', function () {
  if (window.scrollY >= y - 64) {
    $('.navi-wrapper').addClass('active');
  } else {
    $('.navi-wrapper').removeClass('active');
  }
});

$('#git').click(goGit);

function goGit() {
  location.href = 'https://github.com/1binibin';
}

AOS.init({
  offset: 300,
  duration: 500,
});
