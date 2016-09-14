var reg_1 = require('./reg');
var _ = new reg_1.Reg();
var Util = (function () {
    function Util() {
    }
    Util.prototype.log = function (text, type) {
        if (type) {
            switch (type) {
                case 'warn':
                    console.warn(text);
                    break;
                case 'log':
                    console.log(text);
                    break;
                case 'info':
                    console.info(text);
                    break;
                case 'error':
                    console.error(text);
                    break;
            }
        }
        else {
            console.log(text);
        }
    };
    Util.prototype.trunc = function (text, length, separator) {
        var len = length || text.length, codes = _.isNull(separator) ? '...' : separator.toString();
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
        var dateArr = this._getDate();
        return "" + dateArr[0] + sepr + dateArr[1] + sepr + dateArr[2];
    };
    Util.prototype.getCNDate = function () {
        var dateArr = this._getDate();
        return dateArr[0] + "\u5E74" + dateArr[1] + "\u6708" + dateArr[2] + "\u65E5";
    };
    Util.prototype.getTimes = function (sepr) {
        if (sepr === void 0) { sepr = ':'; }
        var dateArr = this._getTimes();
        return "" + dateArr[0] + sepr + dateArr[1] + sepr + dateArr[2];
    };
    Util.prototype.getCNTimes = function () {
        var dateArr = this._getTimes();
        return dateArr[0] + "\u65F6" + dateArr[1] + "\u5206" + dateArr[2] + "\u79D2";
    };
    Util.prototype._getDate = function () {
        var time = new Date(), year = time.getFullYear(), m = time.getMonth() + 1, month = m < 10 ? ('0' + m) : m, d = time.getDate(), day = d < 10 ? ('0' + d) : d, outArr = [];
        outArr.push(year.toString());
        outArr.push(month.toString());
        outArr.push(day.toString());
        return outArr;
    };
    Util.prototype._getTimes = function () {
        var time = new Date(), hours = time.getHours(), m = time.getMinutes(), minutes = m < 10 ? ('0' + m) : m, s = time.getSeconds(), seconds = s < 10 ? ('0' + s) : s, outArr = [];
        outArr.push(hours.toString());
        outArr.push(minutes.toString());
        outArr.push(seconds.toString());
        return outArr;
    };
    Util.prototype.exNum = function (year) {
        var charArr = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'], num = year.toString(), numArr = num.split(''), len = numArr.length, result = '';
        for (var i = 0; i < len; i++) {
            result += charArr[parseInt(numArr[i])];
        }
        return result;
    };
    Util.prototype.randomNum = function (start, end) {
        return Math.floor(Math.random() * (end - start) + start);
    };
    Util.prototype.getCode = function (num) {
        var random = Math.random();
        return random.toString(16).substr(2, num);
    };
    Util.prototype.getWeek = function (date) {
        date = date || (this.getDate('-'));
        return '星期' + this.exNum(new Date(date).getDay());
    };
    Util.prototype.now = function () {
        var tArr = this._getDate().concat(this._getTimes());
        return tArr.join('');
    };
    Util.prototype.getUrlParam = function () {
        var reg_url = window.location.search;
        var reg_arr = [], url_obj = {};
        if (reg_url) {
            if (reg_url.indexOf('&') !== -1) {
                reg_arr = reg_url.substr(1).split('&');
                for (var v in reg_arr) {
                    var key = reg_arr[v].split('=')[0], value = reg_arr[v].split('=')[1];
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
                var t = setInterval(function () {
                    callback();
                }, time);
                setTimeout(function () {
                    clearInterval(t);
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
exports.Util = Util;
