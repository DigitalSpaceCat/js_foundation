"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var USER_EMAIL = Symbol();

var User = function () {
    function User() {
        _classCallCheck(this, User);
    }

    _createClass(User, [{
        key: "email",
        set: function set(value) {
            if (!/@/.test(value)) throw new Error("invalid email: " + value);

            this[USER_EMAIL] = value;
        },
        get: function get() {
            return this[USER_EMAIL];
        }
    }]);

    return User;
}();

var user = new User();
user.email = "test@test";

console.log(user.email);
// test@test