"use strict";

function getSentence(_ref) {
    var subject = _ref.subject,
        verb = _ref.verb,
        object = _ref.object;

    return subject + " " + verb + " " + object;
}

var o = {
    subject: "I",
    verb: "love",
    object: "JavaScript"
};

var ret = getSentence(o); //"I love JavaScript"
console.log(ret);