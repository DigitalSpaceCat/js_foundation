'use strict';

var Rx = require("rxjs");
var RxDOM = require('rxjs/Rx.DOM');

var source = RxDOM.Observable.ajax({
  url: window.location.href,
  responseType: 'text/html'
});

source.subscribe(function (xhr) {
  return console.log(xhr);
}, function (error) {
  return console.error(error);
}, function () {
  return console.log('done');
});