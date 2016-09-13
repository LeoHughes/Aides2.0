var reg_1 = require('./reg');
var util_1 = require('./util');
var Aides = (function () {
    function Aides() {
        this.reg = new reg_1.Reg();
        this.util = new util_1.Util();
    }
    return Aides;
}());
exports.Aides = Aides;
if (window) {
    (function (window) {
        window._ = new Aides();
    })(window);
}
