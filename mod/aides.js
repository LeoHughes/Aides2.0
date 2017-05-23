var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var reg_1 = require("./reg");
var util_1 = require("./util");
var arr_1 = require("./arr");
var obj_1 = require("./obj");
var util = new util_1.default();
var arr = new arr_1.default();
var obj = new obj_1.default();
var Aides = (function (_super) {
    __extends(Aides, _super);
    function Aides() {
        var _this = _super.call(this) || this;
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
exports.default = Aides;
