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
    var data;
    return regeneratorRuntime.wrap(function theFutureIsNow$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    data = void 0;
                    _context.prev = 1;
                    _context.next = 4;
                    return Promise.all([nfcall(fs.readFile, 'a.txt'), nfcall(fs.readFile, 'b.txt'), nfcall(fs.readFile, 'c.txt')]);

                case 4:
                    data = _context.sent;
                    _context.next = 11;
                    break;

                case 7:
                    _context.prev = 7;
                    _context.t0 = _context['catch'](1);

                    console.error("Unable to read one or more input files: " + _context.t0.message);
                    throw _context.t0;

                case 11:
                    _context.next = 13;
                    return ptimeout(5 * 1000);

                case 13:
                    _context.prev = 13;
                    _context.next = 16;
                    return nfcall(fs.writeFile, 'd.txt', data[0] + data[1] + data[2]);

                case 16:
                    _context.next = 22;
                    break;

                case 18:
                    _context.prev = 18;
                    _context.t1 = _context['catch'](13);

                    console.error("Unable to write output file: " + _context.t1.message);
                    throw _context.t1;

                case 22:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this, [[1, 7], [13, 18]]);
}

grun(theFutureIsNow);