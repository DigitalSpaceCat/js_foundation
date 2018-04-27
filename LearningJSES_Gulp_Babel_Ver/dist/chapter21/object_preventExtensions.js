'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = function () {
    function Logger(name) {
        _classCallCheck(this, Logger);

        this.name = name;
        this.log = [];
    }

    _createClass(Logger, [{
        key: "add",
        value: function add(entry) {
            this.log.push({
                log: entry,
                timestamp: Date.now()
            });
        }
    }]);

    return Logger;
}();

var log2 = new Logger("First Mate's Log");

// 확장 금지는 프로퍼티에 값을 설정하거나, 삭제하거나, 속성을 
// 변경하는 작업은 모두 허용되지만 이름 처럼 확장을 금지합니다.
Object.preventExtensions(log2);
Object.isExtensible(log2); // false

log2.name = "First Mate's Boring Log"; // OK
log2.add("Another boring day at sea"); // OK

log2.newProp = 'test';
// TypeError: Can't add property newProp, object is not extensible

log2.name = 'test';
delete log2.name;
Object.defineProperty(log2, 'log', { enumerable: false });