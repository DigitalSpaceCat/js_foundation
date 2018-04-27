'use strict';

var o = {
    name: 'Julie',
    greetBackwards: function greetBackwards() {
        var _this = this;

        var getReservename = function getReservename() {
            var nameBackwards = '';
            for (var i = _this.name.length - 1; i > 0; i--) {
                nameBackwards += _this.name[i];
            }
            return nameBackwards;
        };
        return getReservName() + ' si eman ym ,olleH';
    }
};
o.greetBackwards();