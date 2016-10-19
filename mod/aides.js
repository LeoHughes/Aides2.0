var reg_1 = require('./reg');
var util_1 = require('./util');
var arr_1 = require('./arr');
var obj_1 = require('./obj');
var reg = new reg_1.Reg(), util = new util_1.Util(), arr = new arr_1.Arr(), obj = new obj_1.Obj();
var Aides = (function () {
    function Aides() {
        var _this = this;
        this.isNull = reg.isNull;
        this.isArray = reg.isArray;
        this.isFunction = reg.isFunction;
        this.isObject = reg.isObject;
        this.isString = reg.isString;
        this.isNumber = reg.isNumber;
        this.isBoolean = reg.isBoolean;
        this.isEmpty = reg.isEmpty;
        this.isDate = reg.isDate;
        this.isEmail = reg.isEmail;
        this.isIP = reg.isIP;
        this.isVerifyAccount = reg.isVerifyAccount;
        this.isIDcard = reg.isIDcard;
        this.isUrl = reg.isUrl;
        this.existCN = reg.existCN;
        this.trim = reg.trim;
        this.clearSpace = reg.clearSpace;
        this.getNum = reg.getNum;
        this.getCN = reg.getCN;
        this.excludeHTML = reg.excludeHTML;
        this.excludeStyle = reg.excludeStyle;
        this.log = util.log;
        this.size = util.size;
        this.trunc = util.trunc;
        this.repeat = util.repeat;
        this.getDate = util.getDate;
        this.getCNDate = util.getCNDate;
        this.getTimes = util.getTimes;
        this.getCNTimes = util.getCNTimes;
        this.getDateArr = util.getDateArr;
        this.getTimesArr = util.getTimesArr;
        this.exNum = util.exNum;
        this.randomNum = util.randomNum;
        this.getCode = util.getCode;
        this.getWeek = util.getWeek;
        this.now = util.now;
        this.setTimesDo = util.setTimesDo;
        this.chunk = arr.chunk;
        this.compact = arr.compact;
        this.getMin = arr.getMin;
        this.getMax = arr.getMax;
        this.unique = arr.unique;
        this.concat = arr.concat;
        this.toObj = arr.toObj;
        this.has = obj.has;
        this.keys = obj.keys;
        this.values = obj.values;
        this.methods = obj.methods;
        this.objCompact = obj.objCompact;
        this.pickKeys = obj.pickKeys;
        this.assign = obj.assign;
        this.all = function () {
            var fucArr = _this.methods(_this);
            for (var _i = 0, fucArr_1 = fucArr; _i < fucArr_1.length; _i++) {
                var v = fucArr_1[_i];
                _this.log("[" + v + "]", 'info');
            }
        };
        this.extend = function (key, fn) {
            var fucArr = _this.methods(_this);
            if (fucArr.indexOf(key) === -1) {
                _this[key] = fn;
            }
        };
    }
    return Aides;
}());
exports.Aides = Aides;
