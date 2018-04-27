"use strict";

var words = ["Beachball", "Rodeo", "Angel", "Aardvark", "Xylophone", "November", "Chocolate", "Papaya", "Uniform", "Joker", "Clover", "Bali"];
var longWords = words.reduce(function (a, w) {
    return w.length > 6 ? a + " " + w : a;
}, "").trim();
//longWords: "Beachball Aardvark Xylophone November Chocolate Uniform"

//숙제 reduce 대신 filter와 join을 사용하여 같은 결과를 구하라
var longWords2 = words.filter(function (c) {
    return c.length > 6;
}).join(" ");
console.log(longWords2);