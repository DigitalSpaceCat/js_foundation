'use strict';

var fs = require('fs');
function readSketchyFile() {
    try {
        fs.readFile('does_not_exist.txt', function (err, data) {
            if (err) throw err;
        });
    } catch (err) {
        console.log("warning: minor issu occurred, program continuing");
    }
}
readSketchyFile();