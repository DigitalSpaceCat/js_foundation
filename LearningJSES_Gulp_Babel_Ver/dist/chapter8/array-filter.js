'use strict';

// 카드 덱을 만듭니다.
var cards = [];
var _arr = ['H', 'C', 'D', 'S'];
for (var _i = 0; _i < _arr.length; _i++) {
    var suit = _arr[_i]; // 하트, 클로버, 다이아몬드, 스페이드
    for (var value = 1; value <= 13; value++) {
        cards.push({ suit: suit, value: value });
    }
} // value가 2인 카드
cards.filter(function (c) {
    return c.value === 2;
});
//[
//  {suit: 'H', value: 2},
//  {suit: 'C', value: 2},
//  {suit: 'D', value: 2},
//  {suit: 'S', value: 2}
//]

// 여기서 부터는 지면을 생각해서 반환된 배열의 길이만 적습니다.

// 다이아몬드
cards.filter(function (c) {
    return c.suit === 'D';
}); // length: 13

// 킹, 퀸, 주니어
cards.filter(function (c) {
    return c.value > 10;
}); // length: 12

// 하트의 킹, 퀸 주니어
cards.filter(function (c) {
    return c.value > 10 && c.suit === 'H';
}); // length:3

function cardToString(c) {
    var suits = { 'H': '\u2665', 'C': '\u2663', 'D': '\u2666', 'S': '\u2660' };
    var values = { 1: 'A', 11: 'J', 12: 'Q', 13: 'K' };
    // cardToString을 호출할 때마다 매번 값을 만드는 건 그리 효율적인 방법은 아닙니다.
    // 더 효율적인 방법은 독자의 연습문제로 남기겠습니다.
    for (var i = 2; i <= 10; i++) {
        values[i] = i;
    }return values[c.value] + suits[c.suit];
}

//value가 2인 카드
cards.filter(function (c) {
    return c.value === 2;
}).map(cardToString); // ["2♥","2♣","2♦","2♠"]

//하트의 킹, 퀸, 주니어
cards.filter(function (c) {
    return c.value > 10 && c.suit === 'H';
}).map(cardToString); // [ 'J♥', 'Q♥', 'K♥' ]