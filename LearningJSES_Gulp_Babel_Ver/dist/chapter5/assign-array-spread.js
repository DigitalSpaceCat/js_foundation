"use strict";

function addPrefix(prefix) {
    // 나중에 더 좋은 방법을 배웁니다.
    var prefixedWords = [];

    for (var _len = arguments.length, words = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        words[_key - 1] = arguments[_key];
    }

    for (var i = 0; i < words.length; i++) {
        prefixedWords[i] = prefix + words[i];
    }
    return prefixedWords;
}

addPrefix("con", "verse", "vex"); // [converse","convex"]