Object.defineProperty(exports, "__esModule", { value: true });
var reg_1 = require("./reg");
var obj_1 = require("./obj");
var _ = new reg_1.default();
var o = new obj_1.default();
var Arr = (function () {
    function Arr() {
    }
    Arr.prototype.chunk = function (arr, size) {
        var outArr = [];
        var length = arr.length;
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
        var nArr = this.compact(arr);
        return Math.min.apply(Math, nArr);
    };
    Arr.prototype.getMax = function (arr) {
        var nArr = this.compact(arr);
        return Math.max.apply(Math, nArr);
    };
    Arr.prototype.unique = function (arr) {
        var uq = {};
        var outArr = [];
        var prefix = '';
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
        arr.map(function (v) {
            output[JSON.stringify(v)] = 'z';
        });
        return o.keys(output).map(function (v) {
            return JSON.parse(v);
        });
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
exports.default = Arr;
