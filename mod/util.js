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
    return Util;
}());
exports.Util = Util;
