var reg_1 = require("./reg");
var _ = new reg_1.default();
var Obj = (function () {
    function Obj() {
    }
    Obj.prototype.has = function (obj, key) {
        var flag = false;
        if (_.isObject(obj)) {
            for (var v in obj) {
                if (v === key)
                    flag = true;
            }
        }
        return flag;
    };
    Obj.prototype.keys = function (obj) {
        var oArr = [];
        if (_.isObject(obj)) {
            for (var p in obj) {
                if (this.has(obj, p))
                    oArr.push(p);
            }
        }
        return oArr;
    };
    Obj.prototype.values = function (obj) {
        var oArr = [];
        if (_.isObject(obj)) {
            for (var v in obj) {
                if (this.has(obj, v))
                    oArr.push(obj[v]);
            }
        }
        return oArr;
    };
    Obj.prototype.methods = function (obj) {
        var oArr = [];
        for (var v in obj) {
            if (_.isFunction(obj[v]))
                oArr.push(v);
        }
        return oArr;
    };
    Obj.prototype.objCompact = function (obj) {
        var newObj = {};
        for (var v in obj) {
            if (obj[v]) {
                newObj[v] = obj[v];
            }
        }
        return newObj;
    };
    Obj.prototype.pickKeys = function (obj, keys) {
        var newObj = {};
        for (var v in keys) {
            if (obj.hasOwnProperty(keys[v])) {
                newObj[keys[v]] = obj[keys[v]];
            }
        }
        return newObj;
    };
    Obj.prototype.assign = function (tarObj) {
        if (tarObj === void 0) { tarObj = {}; }
        var objs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            objs[_i - 1] = arguments[_i];
        }
        for (var i in objs) {
            for (var v in objs[i]) {
                if (!this.has(tarObj, objs[i][v])) {
                    tarObj[v] = objs[i][v];
                }
            }
        }
        return tarObj;
    };
    return Obj;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Obj;
