"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Car = function () {
    _createClass(Car, null, [{
        key: "getNextVin",
        value: function getNextVin() {
            return Car.nextVin++;
        }
    }]);

    function Car(make, model) {
        _classCallCheck(this, Car);

        this.make = make;
        this.model = model;
        this.vin = Car.getNextVin();
    }

    _createClass(Car, null, [{
        key: "areSimilar",
        value: function areSimilar(car1, car2) {
            return car1.make === car2.make && car1.model === car2.modle;
        }
    }, {
        key: "areSame",
        value: function areSame(car1, car2) {
            return car1.vin === car2.vin;
        }
    }]);

    return Car;
}();

Car.nextVin = 0;

var car1 = new Car("Tesla", "S");
var car2 = new Car("Mazda", "3");
var car3 = new Car("Mazda", "3");

car1.vin; // 0
car2.vin; // 1
car3.vin; // 2

Car.areSimilar(car1, car2); // false
Car.areSimilar(car2, car3); // true
Car.areSame(car2, car3); // false
Car.areSame(car2, car2); // true