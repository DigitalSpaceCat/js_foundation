"use strict";

var cart = [{ name: "Widget", price: 9.95 }, { name: "Gadget", price: 22.95 }];
var names = cart.map(function (x) {
    return x.name;
}); // ["Widget","Gadget"]
var prices = cart.map(function (x) {
    return x.price;
}); // [9.95, 22,95]
var discountPrices = prices.map(function (x) {
    return x * 0.8;
}); // [7.96, 18.36]