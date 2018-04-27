"use strict";

var Rx = require("rxjs");
function get(url) {
  return Rx.Observable.create(function (observer) {
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function () {
      if (req.status === 200) {
        observer.next(req.response);
        observer.complete();
      } else {
        console.log("error1");
        observer.error(new Error(req.statusText));
      }
    };

    req.onerror = function () {
      console.log("error2");
      observer.error(new Error('An error occured'));
    };

    req.send();
  });
}

var source = get('http://api.openweathermap.org/data/2.5/weather?zip=94040,us&APPID=62ccfb02094e9fbb1be6519273bd9b4d');

source.subscribe(function (response) {
  return console.log(response);
}, function (error) {
  return console.error(error);
}, function () {
  return console.log('done');
});