'use strict';

var getNextRainbowColor = function () {
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    var colorIndex = -1;

    return function () {
        if (++colorIndex >= colors.length) colorIndex = 0;
        return colors[colorIndex];
    };
}();

setInterval(function () {
    document.querySelector('.rainbow').style['background-color'] = getNextRainbowColor();
}, 500);