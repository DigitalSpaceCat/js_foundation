"use strict";

function f(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "default";
    var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;

    return a + " - " + b + " - " + c;
}

f(5, 6, 7); //"5 - 6 - 7"
f(5, 6); //"5 - 6 - 3"
f(5); //"5 - default - 3"
f(); //"undefined - default - 3"