function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

var navbar = document.getElementById('desktop-nav');
var lastScrollTop = 0;

window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    navbar.classList.add('nav-hidden');
  } else {
    // Scrolling up
    navbar.classList.remove('nav-hidden');
  }

  lastScrollTop = scrollTop;
});

