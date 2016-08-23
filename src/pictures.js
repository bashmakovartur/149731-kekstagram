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

var callBack = function(date) {
  pictures = date;
};

requestJSONP('http://localhost:1506/api/pictures', callBack);
