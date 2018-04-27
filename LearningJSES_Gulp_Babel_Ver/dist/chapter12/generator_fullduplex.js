"use strict";

var _marked = /*#__PURE__*/regeneratorRuntime.mark(interrogate);

function interrogate() {
    var name, color;
    return regeneratorRuntime.wrap(function interrogate$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return "What is your name?";

                case 2:
                    name = _context.sent;
                    _context.next = 5;
                    return "What is your favorite color?";

                case 5:
                    color = _context.sent;
                    return _context.abrupt("return", name + "'s favorite color is " + color + ".");

                case 7:
                case "end":
                    return _context.stop();
            }
        }
    }, _marked, this);
}

var it = interrogate();
it.next(); // { value: "What is your name?", done: false}
it.next('Ethan'); // { value: "What is your favorite color?", done: false}
it.next('orange'); // { value: "Ehtan's favorite color is orange.", done: true}