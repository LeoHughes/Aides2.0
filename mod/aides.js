var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var reg_1 = require("./reg");
var util_1 = require("./util");
var arr_1 = require("./arr");
var obj_1 = require("./obj");
var util = new util_1.default(), arr = new arr_1.default(), obj = new obj_1.default();
var Aides = (function (_super) {
    __extends(Aides, _super);
    function Aides() {
        var _this = _super.call(this) || this;
        _this.log = util.log;
        _this.size = util.size;
        _this.trunc = util.trunc;
        _this.repeat = util.repeat;
        _this.getDate = util.getDate;
        _this.getCNDate = util.getCNDate;
        _this.getTimes = util.getTimes;
        _this.getCNTimes = util.getCNTimes;
        _this.getDateArr = util.getDateArr;
        _this.getTimesArr = util.getTimesArr;
        _this.exNum = util.exNum;
        _this.randomNum = util.randomNum;
        _this.getCode = util.getCode;
        _this.getWeek = util.getWeek;
        _this.now = util.now;
        _this.setTimesDo = util.setTimesDo;
        _this.chunk = arr.chunk;
        _this.compact = arr.compact;
        _this.getMin = arr.getMin;
        _this.getMax = arr.getMax;
        _this.unique = arr.unique;
        _this.colUnique = arr.colUnique;
        _this.concat = arr.concat;
        _this.toObj = arr.toObj;
        _this.has = obj.has;
        _this.keys = obj.keys;
        _this.values = obj.values;
        _this.methods = obj.methods;
        _this.objCompact = obj.objCompact;
        _this.pickKeys = obj.pickKeys;
        _this.assign = obj.assign;
        _this.all = function () {
            var fucArr = _this.methods(_this);
            for (var _i = 0, fucArr_1 = fucArr; _i < fucArr_1.length; _i++) {
                var v = fucArr_1[_i];
                _this.log("[" + v + "]");
            }
        };
        _this.extend = function (key, fn) {
            var fucArr = _this.methods(_this);
            if (fucArr.indexOf(key) === -1) {
                _this[key] = fn;
            }
        };
        return _this;
    }
    return Aides;
}(reg_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Aides;
