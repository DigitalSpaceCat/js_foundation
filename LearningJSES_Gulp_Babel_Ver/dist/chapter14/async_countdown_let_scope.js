"use strict";

function countdown() {
    console.log("Countdown");
    // 이제 i는 블록 스코프 변수입니다.

    var _loop = function _loop(i) {
        setTimeout(function () {
            console.log(i === 0 ? "GO!" : i);
        }, (5 - i) * 1000);
    };

    for (var i = 5; i >= 0; i--) {
        _loop(i);
    }
}
countdown();