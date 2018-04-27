"use strict";

var _loop = function _loop(i) {
    setTimeout(function () {
        console.log(i === 0 ? "go" : i);
    }, (5 - i) * 1000);
};

for (var i = 5; i >= 0; i--) {
    _loop(i);
}