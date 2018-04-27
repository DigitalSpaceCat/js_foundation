"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vehicle = function () {
    function Vehicle() {
        _classCallCheck(this, Vehicle);

        this.passengers = [];
        console.log("Vehicle created");
    }

    _createClass(Vehicle, [{
        key: "addPassenger",
        value: function addPassenger(p) {
            this.passengers.push(p);
        }
    }]);

    return Vehicle;
}();

var Car = function (_Vehicle) {
    _inherits(Car, _Vehicle);

    function Car() {
        _classCallCheck(this, Car);

        var _this = _possibleConstructorReturn(this, (Car.__proto__ || Object.getPrototypeOf(Car)).call(this));
        // 슈퍼클래스의 생성자를 호출하는 특별한 함수다. 
        // 서브클래스에서는 이 함수를 반드시 호출해야 합니다.


        console.log("Car created");
        return _this;
    }

    _createClass(Car, [{
        key: "deployAirbags",
        value: function deployAirbags() {
            console.log("BWOOSH!");
        }
    }]);

    return Car;
}(Vehicle);

var v = new Vehicle();
v.addPassenger("Frank");
v.addPassenger("Judy");
console.log(v.passengers); // ["Frank", "Judy"]

var c = new Car();
c.addPassenger("Alice");
c.addPassenger("Cameron");
console.log(c.passengers); // ["Alice", "Cameron"]

//v.deployAirbags();          // error
c.deployAirbags(); // "BWOOSH!""