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

/* var skill = document.querySelector('.skill-wrapper');
var title = document.querySelector('.title');
var skills = skill.offsetTop - title.offsetHeight;
console.log(typeof title.outerHeight);
console.log(skill); */
var skill = $('.skill-wrapper').offset().top;
var prj = $('.project-wrapper').offset().top;
var foot = $('.footer-wrapper').offset().top;

function goSkill() {
  window.scrollTo(0, skill - 200);
}

function goPrj() {
  window.scrollTo(0, prj - 170);
}

function goContact() {
  window.scrollTo(0, foot);
}
function goTop() {
  window.scrollTo(0, 0);
}

AOS.init({
  offset: 300,
  duration: 500,
});
