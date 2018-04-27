"use strict";

// 배열 선언
var arr = [1, 2, 3, 4, 5];

// 배열 해체 할당
var x = arr[0],
    y = arr[1],
    rest = arr.slice(2);

x; //1
y; //2
rest; //[3,4,5]