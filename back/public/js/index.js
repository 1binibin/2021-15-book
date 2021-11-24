var y = window.innerHeight;
window.addEventListener('scroll', function () {
  if (window.scrollY >= y - 64) {
    $('.navi-wrapper').addClass('active');
    $('#btTop').css('display', 'block');
  } else {
    $('.navi-wrapper').removeClass('active');
    $('#btTop').css('display', 'none');
  }
});

$('#btTop').click(function () {
  window.scrollTo(0, 0);
});

$('#git').click(goGit);
function goGit() {
  location.href = 'https://github.com/1binibin';
}

AOS.init({
  offset: 300,
  duration: 500,
});
