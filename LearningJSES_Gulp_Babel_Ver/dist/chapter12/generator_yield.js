'use strict';

var _marked = /*#__PURE__*/regeneratorRuntime.mark(rainbow);

function rainbow() {
    return regeneratorRuntime.wrap(function rainbow$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return 'red';

                case 2:
                    _context.next = 4;
                    return 'orange';

                case 4:
                    _context.next = 6;
                    return 'yellow';

                case 6:
                    _context.next = 8;
                    return 'green';

                case 8:
                    _context.next = 10;
                    return 'blue';

                case 10:
                    _context.next = 12;
                    return 'indigo';

                case 12:
                    _context.next = 14;
                    return 'violet';

                case 14:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this);
}

var it = rainbow();

it.next(); // { value: 'red', done: false}
it.next(); // { value: 'orange', done: false}
it.next(); // { value: 'yellow', done: false}
it.next(); // { value: 'green', done: false}
it.next(); // { value: 'blue', done: false}
it.next(); // { value: 'indogo', done: false}
it.next(); // { value: 'indogo', done: false}
it.next(); // { value: 'violet', done: false}
it.next(); // { value: undefined, done: true}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = rainbow()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var color = _step.value;

        console.log(color);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}