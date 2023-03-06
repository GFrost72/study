let mobileNavigationButton = document.querySelector('.js-burger');
let mobileNavigation = document.querySelector('.js-nav-mobile')
let menuLinksList = mobileNavigation.querySelectorAll('.burger-link')


mobileNavigationButton.addEventListener('click', () => {
  document.body.classList.toggle('stop-scroll');
  mobileNavigationButton.classList.toggle('nav-mobile-btn--active');
  mobileNavigation.classList.toggle('nav-mobile--active');
})


menuLinksList.forEach(function (menuLink) {

  menuLink.addEventListener('click', () => {
    document.body.classList.remove('stop-scroll')
    mobileNavigationButton.classList.remove('nav-mobile-btn--active');
    mobileNavigation.classList.remove('nav-mobile--active');
  })

});
