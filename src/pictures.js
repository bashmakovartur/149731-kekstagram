'use strict';

var pictures = [];
function requestJSONP(address, JSONPCallBack) {
  var teg = document.createElement('script');
  teg.src = address;
  document.body.appendChild(teg);
  window.JSONPCallBack = function(date) {
    pictures = date;
  };
}

requestJSONP('http://localhost:1506/api/pictures?callback=window.JSONPCallBack');
