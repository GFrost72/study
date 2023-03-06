let lyp = document.querySelector('.header__nav-list-item-search');
let pole = document.querySelector('.header__search-icon');
let exit = document.querySelector('.exit');

lyp.addEventListener('click', function(){
  pole.classList.toggle('header__search-icon-active');
});

exit.addEventListener('click', function(){
  pole.classList.toggle('header__search-icon-active');
});

