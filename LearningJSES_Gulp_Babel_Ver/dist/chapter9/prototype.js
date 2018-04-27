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
car1.shift === Car.prototype.shift; //true
car1.shift('D');

//여기서 에러가 발생한다. 이후의 코드를 실행하기 위해 주석체크해도 무방하다.
//car1.shift('d');                            //error 
car1.userGear; //'D'
car1.shift === car2.shift; //true

car1.shift = function (gear) {
    this.userGear = gear.toUpperCase();
};
car1.shift === Car.prototype.shift; //true
car1.shift === car2.shift;
car1.shift('d');
car1.userGear; //'D'