var reg_1 = require("./reg");
var obj_1 = require("./obj");
var _ = new reg_1.default(), o = new obj_1.default();
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
        for (var _i = 0, nArr_1 = nArr; _i < nArr_1.length; _i++) {
            var v = nArr_1[_i];
            if (parseInt(v) < val)
                val = v;
        }
        return val;
    };
    Arr.prototype.getMax = function (arr) {
        var nArr = this.compact(arr), val = parseInt(nArr[0]), length = nArr.length;
        for (var _i = 0, nArr_2 = nArr; _i < nArr_2.length; _i++) {
            var v = nArr_2[_i];
            if (parseInt(v) > val)
                val = v;
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
    Arr.prototype.colUnique = function (arr) {
        var output = {};
        arr.map(function (v, i) {
            output[JSON.stringify(v)] = 'z';
        });
        return o.keys(output);
    };
    Arr.prototype.concat = function () {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i] = arguments[_i];
        }
        return this.unique([].concat.apply([], arr));
    };
    Arr.prototype.toObj = function (list, values) {
        var nObj = {};
        for (var v in list) {
            if (!values[v])
                nObj[list[v]] = null;
            nObj[list[v]] = values[v];
        }
        return nObj;
    };
    return Arr;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Arr;
