"use strict";

var start = new Date();
var i = 0;
var intervalId = setInterval(function () {
    var now = new Date();
    if (now.getMinutes() !== start.getMinutes() || ++i > 10) return clearInterval(intervalId);
    console.log(i + ": " + now);
}, 5 * 1000);