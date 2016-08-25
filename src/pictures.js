'use strict';

var pictures = [];
var requestJSONP = function(address, fun) {
  var teg = document.createElement('script');
  var name = 'render';
  teg.src = address + '?callback=' + name;
  document.body.appendChild(teg);
  window[name] = function(date) {
    fun(date);
  };
};

var picturesContainer = document.querySelector('.pictures');
var filtersBlock = document.querySelector('.filters');
filtersBlock.classList.add('hidden');
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


var callBack = function(date) {
  pictures = date;
  pictures.forEach(function(picture) {
    getPictureElement(picture, picturesContainer);
  });

  filtersBlock.classList.remove('hidden');

};

requestJSONP('http://localhost:1506/api/pictures', callBack);
