'use strict';

var _marked = /*#__PURE__*/regeneratorRuntime.mark(abc);

function abc() {
    return regeneratorRuntime.wrap(function abc$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return 'a';

                case 2:
                    _context.next = 4;
                    return 'b';

                case 4:
                    return _context.abrupt('return', 'c');

                case 5:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this);
}

var it = abc();

it.next(); // { value: 'a', done: false}
it.next(); // { value: 'b', done: false}
it.next(); // { value: 'c', done: true}

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