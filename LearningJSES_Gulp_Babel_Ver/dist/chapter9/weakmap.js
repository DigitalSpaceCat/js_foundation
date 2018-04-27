'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Car = function () {

    var carProps = new WeakMap();

    var Car = function () {
        function Car(make, model) {
            _classCallCheck(this, Car);

            this.make = make;
            this.model = model;
            this._userGears = ['P', 'N', 'R', 'D'];
            carProps.set(this, { userGear: this._userGears[0] });
        }

        _createClass(Car, [{
            key: 'shift',
            value: function shift(gear) {
                this.userGear = gear;
            }
        }, {
            key: 'userGear',
            get: function get() {
                return carProps.get(this).userGear;
            },
            set: function set(value) {
                if (this._userGears.indexOf(value) < 0) throw new Error('Invalid gear: ' + value);
                carProps.get(this).userGear = value;
            }
        }]);

        return Car;
    }();

    return Car;
}();

var car1 = new Car("Tesla", "Model 5");
var car2 = new Car("Mazda", "31");
car1.shift('D');
car2.shift('R');

console.log(car1.userGear); //"D"
console.log(car2.userGear); //"R"