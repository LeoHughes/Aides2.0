var reg_1 = require('./reg');
var _ = new reg_1.Reg();
var Arr = (function () {
    function Arr() {
    }
    Arr.prototype.chunk = function (arr, size) {
        var outArr = [], length = arr.length;
        for (var i = 0; i < length; i += size) {
            var inArr = arr.slice(i, i + size);
            outArr.push(inArr);
        }
        return outArr;
    };
    Arr.prototype.compact = function (arr) {
        var outArr = [];
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var v = arr_1[_i];
            if (v)
                outArr.push(v);
        }
        return outArr;
    };
    Arr.prototype.delValue = function (arr, val) {
        for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
            var v = arr_2[_i];
            if (v == val)
                arr.splice(arr.indexOf(v), 1);
        }
        return arr;
    };
    return Arr;
}());
exports.Arr = Arr;
