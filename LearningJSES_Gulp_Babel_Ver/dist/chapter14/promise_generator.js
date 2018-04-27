'use strict';

var _marked = /*#__PURE__*/regeneratorRuntime.mark(theFutureIsNow);

var fs = require('fs');

function nfcall(f) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }

    return new Promise(function (resolve, reject) {
        f.call.apply(f, [null].concat(args, [function (err) {
            if (err) return reject(err);

            for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
            }

            resolve(args.length < 2 ? args[0] : args);
        }]));
    });
}

function ptimeout(delay) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, delay);
    });
}

function grun(g) {
    var it = g();
    (function iterate(val) {
        var x = it.next(val);
        if (!x.done) {
            if (x.value instanceof Promise) {
                x.value.then(iterate).catch(function (err) {
                    return it.throw(err);
                });
            } else {
                setTimeout(iterate, 0, x.value);
            }
        }
    })();
}

function theFutureIsNow() {
    var dataA, dataB, dataC;
    return regeneratorRuntime.wrap(function theFutureIsNow$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return nfcall(fs.readFile, 'a.txt');

                case 2:
                    dataA = _context.sent;
                    _context.next = 5;
                    return nfcall(fs.readFile, 'b.txt');

                case 5:
                    dataB = _context.sent;
                    _context.next = 8;
                    return nfcall(fs.readFile, 'c.txt');

                case 8:
                    dataC = _context.sent;
                    _context.next = 11;
                    return ptimeout(5 * 1000);

                case 11:
                    _context.next = 13;
                    return nfcall(fs.writeFile, 'd.txt', dataA + dataB + dataC);

                case 13:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this);
}

grun(theFutureIsNow);