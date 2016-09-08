var date_reg = /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/;
var email_reg = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)/;
var IP_reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])((\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}|(\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){5})$/;
var verifyAccount_reg = /^[a-zA-Z][a-zA-Z0-9_]{5,14}$/;
var url_reg = /[a-zA-z]+:\/\/[^\s]/;
var trim_reg = /(^\s*)|(\s*$)/g;
var clearSpace_reg = /[ ]/g;
var existCN_reg = /.*[\u4e00-\u9fa5]+.*$/;
var num_reg = /[^\d]/g;
var CN_reg = /[^\u4e00-\u9fa5\uf900-\ufa2d]/g;
var HTMLTag_reg = /<\/?[^>]*>/g;
var HTMLStyle_reg = / style\s*?=\s*?(['"])[\s\S]*?\1/g;
var nbsp_reg = /&nbsp;/ig;
var Reg = (function () {
    function Reg() {
    }
    Reg.prototype._testType = function (obj) {
        return Object.prototype.toString.call(obj);
    };
    Reg.prototype.isNull = function (obj) {
        return obj === '' || obj === undefined || obj === null ? true : false;
    };
    Reg.prototype.isArray = function (arr) {
        var typeName = '[object Array]';
        return (this._testType(arr) === typeName);
    };
    Reg.prototype.isFunction = function (func) {
        var typeName = '[object Function]';
        return (this._testType(func) === typeName);
    };
    Reg.prototype.isObject = function (obj) {
        var typeName = '[object Object]';
        return (this._testType(obj) === typeName);
    };
    Reg.prototype.isString = function (str) {
        var typeName = '[object String]';
        return (this._testType(str) === typeName);
    };
    Reg.prototype.isNumber = function (num) {
        var typeName = '[object Number]';
        return (this._testType(num) === typeName);
    };
    Reg.prototype.isBoolean = function (flag) {
        var typeName = '[object Boolean]';
        return (this._testType(flag) === typeName);
    };
    Reg.prototype.isEmpty = function (obj) {
        var flag = true;
        if (this.isArray(obj) || this.isNumber(obj) || this.isString(obj)) {
            flag = obj.length === 0 ? true : false;
        }
        if (this.isObject(obj)) {
            for (var p in obj) {
                if (obj.hasOwnProperty(p)) {
                    flag = false;
                }
            }
        }
        return flag;
    };
    Reg.prototype._testRE = function (reg, obj) {
        return reg.test(obj);
    };
    Reg.prototype._replaceRE = function (reg, str, rStr) {
        return str.toString().replace(reg, rStr);
    };
    Reg.prototype.isDate = function (time) {
        return this._testRE(date_reg, time);
    };
    Reg.prototype.isEamil = function (email) {
        return this._testRE(email_reg, email);
    };
    Reg.prototype.isIP = function (ip) {
        return this._testRE(IP_reg, ip);
    };
    Reg.prototype.isVerifyAccount = function (account) {
        return this._testRE(verifyAccount_reg, account);
    };
    Reg.prototype.isUrl = function (url) {
        return this._testRE(url_reg, url);
    };
    Reg.prototype.existCN = function (text) {
        return this._testRE(existCN_reg, text);
    };
    Reg.prototype.trim = function (text) {
        return this._replaceRE(trim_reg, text, '');
    };
    Reg.prototype.clearSpace = function (text) {
        return this._replaceRE(clearSpace_reg, text, '');
    };
    Reg.prototype.getNum = function (text) {
        return parseInt(this._replaceRE(num_reg, text, ''));
    };
    Reg.prototype.getCN = function (text) {
        return this._replaceRE(CN_reg, text, '');
    };
    Reg.prototype.excludeHTML = function (html) {
        var reHTML = this._replaceRE(HTMLTag_reg, html, '');
        return this._replaceRE(nbsp_reg, reHTML, '');
    };
    Reg.prototype.excludeStyle = function (html) {
        return this._replaceRE(HTMLStyle_reg, html, '');
    };
    return Reg;
}());
exports.Reg = Reg;
