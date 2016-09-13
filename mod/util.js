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
    Util.prototype.getDate = function (type) {
        var time = new Date(), year = time.getFullYear(), m = time.getMonth() + 1, month = m < 10 ? ('0' + m) : m, d = time.getDate(), day = d < 10 ? ('0' + d) : d, dateText = '';
        if (type === 'CN') {
            return dateText += year + '年' + month + '月' + day + '日';
        }
        else {
            return dateText += year + '-' + month + '-' + day;
        }
    };
    Util.prototype.getTimes = function (type) {
        var time = new Date(), hours = time.getHours(), m = time.getMinutes(), minutes = m < 10 ? ('0' + m) : m, s = time.getSeconds(), seconds = s < 10 ? ('0' + s) : s, dateText = '';
        if (type === 'CN') {
            return dateText += hours + '时' + minutes + '分' + seconds + '秒';
        }
        else {
            return dateText += hours + ':' + minutes + ':' + seconds;
        }
    };
    Util.prototype.exNum = function (year) {
        var charArr = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'], num = year.toString(), numArr = num.split(''), len = numArr.length, result = '';
        for (var i = 0; i < len; i++) {
            result += charArr[parseInt(numArr[i])];
        }
        return result;
    };
    return Util;
}());
exports.Util = Util;
