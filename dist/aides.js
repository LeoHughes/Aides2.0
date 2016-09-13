'use strict';

/******/(function (modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/var installedModules = {};

	/******/ // The require function
	/******/function __webpack_require__(moduleId) {

		/******/ // Check if module is in cache
		/******/if (installedModules[moduleId])
			/******/return installedModules[moduleId].exports;

		/******/ // Create a new module (and put it into the cache)
		/******/var module = installedModules[moduleId] = {
			/******/exports: {},
			/******/id: moduleId,
			/******/loaded: false
			/******/ };

		/******/ // Execute the module function
		/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

		/******/ // Flag the module as loaded
		/******/module.loaded = true;

		/******/ // Return the exports of the module
		/******/return module.exports;
		/******/
	}

	/******/ // expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m = modules;

	/******/ // expose the module cache
	/******/__webpack_require__.c = installedModules;

	/******/ // __webpack_public_path__
	/******/__webpack_require__.p = "";

	/******/ // Load entry module and return exports
	/******/return __webpack_require__(0);
	/******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports, __webpack_require__) {

	var reg_1 = __webpack_require__(1);
	var util_1 = __webpack_require__(2);
	var Aides = function () {
		function Aides() {
			this.reg = new reg_1.Reg();
			this.util = new util_1.Util();
		}
		return Aides;
	}();
	exports.Aides = Aides;
	if (window) {
		(function (window) {
			window._ = new Aides();
		})(window);
	}

	/***/
},
/* 1 */
/***/function (module, exports) {

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
	var Reg = function () {
		function Reg() {}
		Reg.prototype._testType = function (obj) {
			return Object.prototype.toString.call(obj);
		};
		Reg.prototype.isNull = function (obj) {
			return obj === '' || obj === undefined || obj === null ? true : false;
		};
		Reg.prototype.isArray = function (arr) {
			var typeName = '[object Array]';
			return this._testType(arr) === typeName;
		};
		Reg.prototype.isFunction = function (func) {
			var typeName = '[object Function]';
			return this._testType(func) === typeName;
		};
		Reg.prototype.isObject = function (obj) {
			var typeName = '[object Object]';
			return this._testType(obj) === typeName;
		};
		Reg.prototype.isString = function (str) {
			var typeName = '[object String]';
			return this._testType(str) === typeName;
		};
		Reg.prototype.isNumber = function (num) {
			var typeName = '[object Number]';
			return this._testType(num) === typeName;
		};
		Reg.prototype.isBoolean = function (flag) {
			var typeName = '[object Boolean]';
			return this._testType(flag) === typeName;
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
	}();
	exports.Reg = Reg;

	/***/
},
/* 2 */
/***/function (module, exports, __webpack_require__) {

	var reg_1 = __webpack_require__(1);
	var _ = new reg_1.Reg();
	var Util = function () {
		function Util() {}
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
			} else {
				console.log(text);
			}
		};
		Util.prototype.trunc = function (text, length, separator) {
			var len = length || text.length,
			    codes = _.isNull(separator) ? '...' : separator.toString();
			return text.substring(0, len) + codes;
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
			var time = new Date(),
			    year = time.getFullYear(),
			    m = time.getMonth() + 1,
			    month = m < 10 ? '0' + m : m,
			    d = time.getDate(),
			    day = d < 10 ? '0' + d : d,
			    dateText = '';
			if (type === 'CN') {
				return dateText += year + '年' + month + '月' + day + '日';
			} else {
				return dateText += year + '-' + month + '-' + day;
			}
		};
		Util.prototype.getTimes = function (type) {
			var time = new Date(),
			    hours = time.getHours(),
			    m = time.getMinutes(),
			    minutes = m < 10 ? '0' + m : m,
			    s = time.getSeconds(),
			    seconds = s < 10 ? '0' + s : s,
			    dateText = '';
			if (type === 'CN') {
				return dateText += hours + '时' + minutes + '分' + seconds + '秒';
			} else {
				return dateText += hours + ':' + minutes + ':' + seconds;
			}
		};
		Util.prototype.exNum = function (year) {
			var charArr = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'],
			    num = year.toString(),
			    numArr = num.split(''),
			    len = numArr.length,
			    result = '';
			for (var i = 0; i < len; i++) {
				result += charArr[parseInt(numArr[i])];
			}
			return result;
		};
		Util.prototype.roundNum = function (start, end) {
			return Math.floor(Math.random() * (end - start) + start);
		};
		return Util;
	}();
	exports.Util = Util;

	/***/
}
/******/]);