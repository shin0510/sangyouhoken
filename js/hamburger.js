"use strict";
window.onload = function () {
    let hamburger = document.getElementById('js-hamburger');
  let spNav = document.getElementById('sp-nav');
  let html = document.documentElement;
  let body = document.body;

    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('open');
      spNav.classList.toggle('open');
      html.classList.toggle('no_scroll');
      body.classList.toggle('no_scroll');
    });
  let li = document.querySelectorAll('#sp-nav li');

li.forEach(function(item) {
    item.addEventListener('click', function () {
        hamburger.classList.toggle('open');
        spNav.classList.toggle('open');
        html.classList.toggle('no_scroll');
        body.classList.toggle('no_scroll');
    });
});
  
};
