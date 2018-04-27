'use strict';

function getRainbowIterator() {
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    var colorIndex = -1;

    return {
        next: function next() {
            if (++colorIndex >= colors.length) colorIndex = 0;

            return { value: colors[colorIndex], done: false };
        }
    };
}

var rainbowIterator = getRainbowIterator();

setInterval(function () {
    document.querySelector('.rainbow').style['background-color'] = rainbowIterator.next().value;
    //console.log(rainbowIterator.next().value);
}, 500);