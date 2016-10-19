var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var reg_1 = require('./reg');
var util_1 = require('./util');
var arr_1 = require('./arr');
var obj_1 = require('./obj');
var util = new util_1.Util(), arr = new arr_1.Arr(), obj = new obj_1.Obj();
var Aides = (function (_super) {
    __extends(Aides, _super);
    function Aides() {
        var _this = this;
        _super.call(this);
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
}(reg_1.Reg));
exports.Aides = Aides;
