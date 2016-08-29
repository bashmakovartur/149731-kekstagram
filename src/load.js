'use strict';

var requestJSONP = function(address, fun) {
  var teg = document.createElement('script');
  var name = 'render';
  teg.src = address + '?callback=' + name;
  document.body.appendChild(teg);
  window[name] = function(date) {
    fun(date);
  };
};

module.exports = requestJSONP;
