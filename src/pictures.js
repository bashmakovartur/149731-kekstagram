'use strict';

var pictures = [];
var picturesContainer = document.querySelector('.pictures');
var filtersBlock = document.querySelector('.filters');

var load = require('./load');

var getPictureElement = require('./review');

var callBack = function(date) {
  pictures = date;
  pictures.forEach(function(picture) {
    getPictureElement(picture, picturesContainer);
  });

  filtersBlock.classList.remove('hidden');

};

load('http://localhost:1506/api/pictures', callBack);
