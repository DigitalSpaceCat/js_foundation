"use strict";

require('core-js/fn/array/values');

var book = ["Twinkle, twinkle, little bat!", "How I wonder what you're at!", "Up above the world you fly,", "Like a tea tray in the sky.", "Twinkle, twinkle, little bat!", "How I wonder what you're at!"];

var it1 = book.values();
var it2 = book.values();
// 어느 이터레이터도 아직 시작하지 않았습니다.

// it1으로 두 페이지를 읽습니다.
it1.next(); // { value: "Twinkle, twinkle, little bat!", done: false }
it1.next(); // { value: "How I wonder what you're at!", done: false }

// it2으로 한 페이지를 읽습니다.
it2.next(); // { value: "Twinkle, twinkle, little bat!", done: false }

// it1으로 한 페이지를 읽습니다.
it1.next(); // { value: "Up above the world you fly", done: false }