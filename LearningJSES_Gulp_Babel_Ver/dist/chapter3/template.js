"use strict";

var currentTemp = 19.5;
//00b0는 온도를 나타내는 유니코드 코드 포인트입니다.
var message = "The current temperature is " + currentTemp + " \xB0";
console.log(message);