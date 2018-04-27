"use strict";

var items = ["Widget", "Gadget"];
var prices = [9.95, 22.95];
var cart = items.map(function (x, i) {
  return { name: x, price: prices[i] };
});
//cart:[{ name:"Widget", price: 9.95 }, {name:"Gadget", price: 22.95}]