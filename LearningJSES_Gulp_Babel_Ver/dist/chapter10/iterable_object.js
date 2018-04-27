"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Log = function () {
    function Log() {
        _classCallCheck(this, Log);

        this.messages = [];
    }

    _createClass(Log, [{
        key: "add",
        value: function add(message) {
            this.messages.push({ message: message, timestamp: Date.now() });
        }
    }, {
        key: Symbol.iterator,
        value: function value() {
            var i = 0;
            var messages = this.messages;
            return {
                next: function next() {
                    if (i >= messages.length) return { value: undefined, done: true };
                    return { value: messages[i++], done: false };
                }
            };
        }
    }]);

    return Log;
}();

var log = new Log();
log.add("first day at sea");
log.add("spotted whale");
log.add("spotted another vessel");

// 로그를 배열처럼 순회 합니다.
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = log[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var entry = _step.value;

        console.log(entry.message + " @ " + entry.timestamp);
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