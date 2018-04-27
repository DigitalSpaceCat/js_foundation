'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventEmitter = require('events').EventEmitter;

var Countdown = function (_EventEmitter) {
    _inherits(Countdown, _EventEmitter);

    function Countdown(seconds, superstitious) {
        _classCallCheck(this, Countdown);

        var _this = _possibleConstructorReturn(this, (Countdown.__proto__ || Object.getPrototypeOf(Countdown)).call(this));

        _this.seconds = seconds;
        _this.superstitious = !!superstitious;
        return _this;
    }

    _createClass(Countdown, [{
        key: 'go',
        value: function go() {
            var countdown = this;
            var timeoutIds = [];
            return new Promise(function (resolve, reject) {
                var _loop = function _loop(i) {
                    timeoutIds.push(setTimeout(function () {
                        if (countdown.superstitious && i === 13) {
                            // 대기중인 타임아웃을 모두 취소합니다.
                            timeoutIds.forEach(clearTimeout);
                            return reject(new Error("Oh my god"));
                        }
                        countdown.emit('tick', i);
                        if (i === 0) resolve();
                    }, (countdown.seconds - 1) * 1000));
                };

                for (var i = countdown.seconds; i >= 0; i--) {
                    _loop(i);
                }
            });
        }
    }]);

    return Countdown;
}(EventEmitter);

function launch() {
    return new Promise(function (resolve, reject) {
        console.log("Lift off!");
        setTimeout(function () {
            resolve("In orbit!");
        }, 2 * 1000); //2초만에 궤도에 도달하다니!
    });
}

var c = new Countdown(15, true);

c.go().then(launch).then(function (msg) {
    console.log(msg);
}).catch(function (err) {
    console.error("Houston, we have a problem...");;
});