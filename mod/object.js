var reg_1 = require('./reg');
var _ = new reg_1.Reg();
var Object = (function () {
    function Object() {
    }
    Object.prototype.has = function (obj, key) {
        var flag = false;
        if (_.isObject(obj)) {
            for (var v in obj) {
                if (v === key)
                    flag = true;
            }
        }
        return flag;
    };
    Object.prototype.keys = function (obj) {
        var oArr = [];
        if (_.isObject(obj)) {
            for (var p in obj) {
                if (this.has(obj, p))
                    oArr.push(p);
            }
        }
        return oArr;
    };
    Object.prototype.values = function (obj) {
        var oArr = [];
        if (_.isObject(obj)) {
            for (var v in obj) {
                if (this.has(obj, v))
                    oArr.push(obj[v]);
            }
        }
        return oArr;
    };
    Object.prototype.methods = function (obj) {
        var oArr = [];
        for (var v in obj) {
            if (_.isFunction(obj[v]))
                oArr.push(v);
        }
        return oArr;
    };
    Object.prototype.objCompact = function (obj) {
        var newObj = {};
        for (var v in obj) {
            if (obj[v]) {
                newObj[v] = obj[v];
            }
        }
        return newObj;
    };
    Object.prototype.pickKeys = function (obj, keys) {
        var newObj = {};
        for (var v in keys) {
            if (obj.hasOwnProperty(keys[v])) {
                newObj[keys[v]] = obj[keys[v]];
            }
        }
        return newObj;
    };
    return Object;
}());
exports.Object = Object;
