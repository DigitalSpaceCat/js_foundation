"use strict";

var message = function () {
    var secret = "I`m a secret";
    return "The secret is " + secret.lengh + " character long.";
}();

console.log(message);