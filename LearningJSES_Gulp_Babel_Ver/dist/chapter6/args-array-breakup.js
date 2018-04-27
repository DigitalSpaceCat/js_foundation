"use strict";

function getSentence(_ref) {
    var subject = _ref.subject,
        verb = _ref.verb,
        object = _ref.object;

    return subject + " " + verb + " " + object;
}

var arr = ["I", "love", "JavaScript"];
var ret = getSentence(arr); //"I love JavaScript"

console.log(ret);