Object.defineProperty(exports, "__esModule", { value: true });
var reg_1 = require("./reg");
var obj_1 = require("./obj");
var _ = new reg_1.default();
var o = new obj_1.default();
var Util = (function () {
    function Util() {
    }
    Util.prototype.size = function (el) {
        var length;
        if (_.isString(el) || _.isArray(el)) {
            length = el.length;
        }
        else if (_.isObject(el)) {
            length = o.keys(el).length;
        }
        else if (_.isNumber(el)) {
            el = el.toString().split('.')[0];
            length = el.length;
        }
        return length;
    };
    Util.prototype.trunc = function (text, len, separator) {
        var codes = _.isNull(separator) ? '...' : separator.toString();
        return (text.substring(0, len) + codes);
    };
    Util.prototype.repeat = function (text, length) {
        var outStr = '';
        if (_.isString(text)) {
            for (var i = 0; i < length; i++) {
                outStr += text;
            }
        }
        return outStr;
    };
    Util.prototype.getDate = function (sepr) {
        if (sepr === void 0) { sepr = '/'; }
        var dateArr = this.getDateArr();
        return "" + dateArr[0] + sepr + dateArr[1] + sepr + dateArr[2];
    };
    Util.prototype.getCNDate = function () {
        var dateArr = this.getDateArr();
        return dateArr[0] + "\u5E74" + dateArr[1] + "\u6708" + dateArr[2] + "\u65E5";
    };
    Util.prototype.getTimes = function (sepr) {
        if (sepr === void 0) { sepr = ':'; }
        var dateArr = this.getTimesArr();
        return "" + dateArr[0] + sepr + dateArr[1] + sepr + dateArr[2];
    };
    Util.prototype.getCNTimes = function () {
        var dateArr = this.getTimesArr();
        return dateArr[0] + "\u65F6" + dateArr[1] + "\u5206" + dateArr[2] + "\u79D2";
    };
    Util.prototype.getDateArr = function () {
        var time = new Date();
        var year = time.getFullYear();
        var m = time.getMonth() + 1;
        var month = m < 10 ? ('0' + m) : m;
        var d = time.getDate();
        var day = d < 10 ? ('0' + d) : d;
        var outArr = [];
        outArr.push(year.toString());
        outArr.push(month.toString());
        outArr.push(day.toString());
        return outArr;
    };
    Util.prototype.getTimesArr = function () {
        var time = new Date();
        var hours = time.getHours();
        var m = time.getMinutes();
        var minutes = m < 10 ? ('0' + m) : m;
        var s = time.getSeconds();
        var seconds = s < 10 ? ('0' + s) : s;
        var outArr = [];
        outArr.push(hours.toString());
        outArr.push(minutes.toString());
        outArr.push(seconds.toString());
        return outArr;
    };
    Util.prototype.exNum = function (charNum) {
        var charArr = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
        var num = charNum.toString();
        var numArr = num.split('');
        var len = numArr.length;
        var result = '';
        for (var i = 0; i < len; i++) {
            result += charArr[parseInt(numArr[i], 10)];
        }
        return result;
    };
    Util.prototype.randomNum = function (start, end) {
        return Math.floor(Math.random() * (end - start) + start);
    };
    Util.prototype.getCode = function (num) {
        if (num === void 0) { num = 4; }
        var random = Math.random();
        return random.toString(16).substr(3, num);
    };
    Util.prototype.getWeek = function (date) {
        date = date || (this.getDate('-'));
        return '星期' + this.exNum(new Date(date).getDay());
    };
    Util.prototype.now = function () {
        var tArr = this.getDateArr().concat(this.getTimesArr());
        return tArr.join('');
    };
    Util.prototype.getUrlParam = function () {
        var reg_url = window.location.search;
        var reg_arr = [];
        var url_obj = {};
        if (reg_url) {
            if (reg_url.indexOf('&') !== -1) {
                reg_arr = reg_url.substr(1).split('&');
                for (var _i = 0, reg_arr_1 = reg_arr; _i < reg_arr_1.length; _i++) {
                    var v = reg_arr_1[_i];
                    var key = v.split('=')[0];
                    var value = v.split('=')[1];
                    url_obj[key] = value;
                }
                return url_obj;
            }
            else {
                return reg_url.substr(1);
            }
        }
    };
    Util.prototype.setTimesDo = function (callback, time, endTime, endCallback) {
        if (!_.isNull(time) && !_.isNull(callback)) {
            if (endTime) {
                var t_1 = setInterval(function () {
                    callback();
                }, time);
                setTimeout(function () {
                    clearInterval(t_1);
                    if (endCallback)
                        endCallback();
                }, time + endTime);
            }
            else {
                setInterval(callback, time);
            }
        }
    };
    return Util;
}());
exports.default = Util;
