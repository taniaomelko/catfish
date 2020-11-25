'use strict';

const catfish = document.querySelector('.catfish');
const closeCatfish = document.querySelector('.catfish__close');

closeCatfish.addEventListener('click', () => {
  catfish.classList.add('catfish--is-closed');
});
