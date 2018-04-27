"use strict";

//객체 선언 
var obj = { b: 2, c: 3, d: 4 };

//해체 할당
var a = obj.a,
    b = obj.b,
    c = obj.c;

a; //undefined: obj에는 "a"프로펕티가 없습니다.
b; //2
c; //3
d; //ReferenceError: "d"는 정의되지 않았습니다.