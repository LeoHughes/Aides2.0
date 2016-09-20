var reg_1 = require('./reg');
var util_1 = require('./util');
var store_1 = require('./store');
var arr_1 = require('./arr');
var obj_1 = require('./obj');
var Aides = (function () {
    function Aides() {
        this.reg = new reg_1.Reg();
        this.util = new util_1.Util();
        this.store = new store_1.Store();
        this.arr = new arr_1.Arr();
        this.obj = new obj_1.Obj();
    }
    return Aides;
}());
exports.Aides = Aides;
if (window) {
    (function (window) {
        window._ = new Aides();
    })(window);
}
