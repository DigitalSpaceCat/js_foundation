"use strict";

require('core-js/fn/array/values');

var book = ["Twinkle, twinkle, little bat!", "How I wonder what you're at!", "Up above the world you fly,", "Like a tea tray in the sky.", "Twinkle, twinkle, little bat!", "How I wonder what you're at!"];

var it = book.values();
var current = it.next();
while (!current.done) {
    console.log(current.value);
    current = it.next();
}