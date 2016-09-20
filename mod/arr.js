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
    Arr.prototype.getMin = function (arr) {
        var nArr = this.compact(arr), val = parseInt(nArr[0]), length = nArr.length;
        for (var v in nArr) {
            if (parseInt(nArr[v]) < val)
                val = nArr[v];
        }
        return val;
    };
    Arr.prototype.getMax = function (arr) {
        var nArr = this.compact(arr), val = parseInt(nArr[0]), length = nArr.length;
        for (var v in nArr) {
            if (parseInt(nArr[v]) > val)
                val = nArr[v];
        }
        return val;
    };
    Arr.prototype.unique = function (arr) {
        var uq = {}, outArr = [], prefix = '';
        for (var v in arr) {
            if (_.isString(arr[v])) {
                prefix = '_str';
            }
            else {
                prefix = '';
            }
            if (!uq[arr[v] + prefix]) {
                uq[arr[v] + prefix] = true;
                outArr.push(arr[v]);
            }
        }
        return outArr;
    };
    Arr.prototype.concat = function () {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i - 0] = arguments[_i];
        }
        return this.unique((_a = []).concat.apply(_a, arr));
        var _a;
    };
    Arr.prototype.toObj = function (list, values) {
        var nObj = {};
        for (var v in list) {
            if (!values[v])
                nObj[list[v]] = undefined;
            nObj[list[v]] = values[v];
        }
        return nObj;
    };
    return Arr;
}());
exports.Arr = Arr;