'use strict';

var templateElement = document.querySelector('template');
var elementToClone;
var IMAGE_LOAD_TIMEOUT = 10000;

if ('content' in templateElement) {
  elementToClone = templateElement.content.querySelector('.picture');
} else {
  elementToClone = templateElement.querySelector('.picture');
}

var getPictureElement = function(date, container) {
  var element = elementToClone.cloneNode(true);
  element.querySelector('.picture-comments').textContent = date.comments;
  element.querySelector('.picture-likes').textContent = date.likes;
  container.appendChild(element);

  var photo = new Image(182, 182);
  var photoLoadTimeout;

  photo.onload = function() {
    clearTimeout(photoLoadTimeout);
    element.getElementsByTagName('img')[0].src = date.url;
  };

  photo.onerror = function() {
    element.classList.add('picture-load-failure');
  };

  photo.src = date.url;

  photoLoadTimeout = setTimeout(function() {
    element.getElementsByTagName('img')[0].src = '';
    element.classList.add('picture-load-failure');
  }, IMAGE_LOAD_TIMEOUT);

  return element;

};

module.exports = getPictureElement;
