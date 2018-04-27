'use strict';

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var colorIndex = -1;
function getNextRainbowColor() {
    if (++colorIndex >= colors.length) colorIndex = 0;
    return colors[colorIndex];
}