/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var aides_1 = __webpack_require__(1);
	var AidesWin = (function (_super) {
	    __extends(AidesWin, _super);
	    function AidesWin() {
	        _super.call(this);
	    }
	    return AidesWin;
	}(aides_1.Aides));
	(function (window) {
	    window._ = new AidesWin();
	})(window);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var reg_1 = __webpack_require__(2);
	var util_1 = __webpack_require__(3);
	var arr_1 = __webpack_require__(5);
	var obj_1 = __webpack_require__(4);
	var reg = new reg_1.Reg(), util = new util_1.Util(), arr = new arr_1.Arr(), obj = new obj_1.Obj();
	var Aides = (function () {
	    function Aides() {
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
	    }
	    return Aides;
	}());
	exports.Aides = Aides;


/***/ },
/* 2 */
/***/ function(module, exports) {

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
	    Reg.prototype.isEmail = function (email) {
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


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var reg_1 = __webpack_require__(2);
	var obj_1 = __webpack_require__(4);
	var _ = new reg_1.Reg(), o = new obj_1.Obj();
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


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var reg_1 = __webpack_require__(2);
	var _ = new reg_1.Reg();
	var Obj = (function () {
	    function Obj() {
	    }
	    Obj.prototype.has = function (obj, key) {
	        var flag = false;
	        if (_.isObject(obj)) {
	            for (var v in obj) {
	                if (v === key)
	                    flag = true;
	            }
	        }
	        return flag;
	    };
	    Obj.prototype.keys = function (obj) {
	        var oArr = [];
	        if (_.isObject(obj)) {
	            for (var p in obj) {
	                if (this.has(obj, p))
	                    oArr.push(p);
	            }
	        }
	        return oArr;
	    };
	    Obj.prototype.values = function (obj) {
	        var oArr = [];
	        if (_.isObject(obj)) {
	            for (var v in obj) {
	                if (this.has(obj, v))
	                    oArr.push(obj[v]);
	            }
	        }
	        return oArr;
	    };
	    Obj.prototype.methods = function (obj) {
	        var oArr = [];
	        for (var v in obj) {
	            if (_.isFunction(obj[v]))
	                oArr.push(v);
	        }
	        return oArr;
	    };
	    Obj.prototype.objCompact = function (obj) {
	        var newObj = {};
	        for (var v in obj) {
	            if (obj[v]) {
	                newObj[v] = obj[v];
	            }
	        }
	        return newObj;
	    };
	    Obj.prototype.pickKeys = function (obj, keys) {
	        var newObj = {};
	        for (var v in keys) {
	            if (obj.hasOwnProperty(keys[v])) {
	                newObj[keys[v]] = obj[keys[v]];
	            }
	        }
	        return newObj;
	    };
	    Obj.prototype.assign = function (tarObj) {
	        if (tarObj === void 0) { tarObj = {}; }
	        var objs = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            objs[_i - 1] = arguments[_i];
	        }
	        for (var i in objs) {
	            for (var v in objs[i]) {
	                if (!this.has(tarObj, objs[i][v])) {
	                    tarObj[v] = objs[i][v];
	                }
	            }
	        }
	        return tarObj;
	    };
	    return Obj;
	}());
	exports.Obj = Obj;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var reg_1 = __webpack_require__(2);
	var _ = new reg_1.Reg();
	var Arr = (function () {
	    function Arr() {
	    }
	    Arr.prototype.chunk = function (arr, size) {
	        var outArr = [], length = arr.length;
	        for (var i = 0; i < length; i += size) {
	            var inArr = arr.slice(i, i + size);
	            outArr.push(inArr);
	        }
	        return outArr;
	    };
	    Arr.prototype.compact = function (arr) {
	        var outArr = [];
	        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
	            var v = arr_1[_i];
	            if (v)
	                outArr.push(v);
	        }
	        return outArr;
	    };
	    Arr.prototype.getMin = function (arr) {
	        var nArr = this.compact(arr), val = parseInt(nArr[0]), length = nArr.length;
	        for (var v in nArr) {
	            if (parseInt(nArr[v]) < val)
	                val = nArr[v];
	        }
	        return val;
	    };
	    Arr.prototype.getMax = function (arr) {
	        var nArr = this.compact(arr), val = parseInt(nArr[0]), length = nArr.length;
	        for (var v in nArr) {
	            if (parseInt(nArr[v]) > val)
	                val = nArr[v];
	        }
	        return val;
	    };
	    Arr.prototype.unique = function (arr) {
	        var uq = {}, outArr = [], prefix = '';
	        for (var v in arr) {
	            if (_.isString(arr[v])) {
	                prefix = '_str';
	            }
	            else {
	                prefix = '';
	            }
	            if (!uq[arr[v] + prefix]) {
	                uq[arr[v] + prefix] = true;
	                outArr.push(arr[v]);
	            }
	        }
	        return outArr;
	    };
	    Arr.prototype.concat = function () {
	        var arr = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            arr[_i - 0] = arguments[_i];
	        }
	        return this.unique((_a = []).concat.apply(_a, arr));
	        var _a;
	    };
	    Arr.prototype.toObj = function (list, values) {
	        var nObj = {};
	        for (var v in list) {
	            if (!values[v])
	                nObj[list[v]] = undefined;
	            nObj[list[v]] = values[v];
	        }
	        return nObj;
	    };
	    return Arr;
	}());
	exports.Arr = Arr;


/***/ }
/******/ ]);