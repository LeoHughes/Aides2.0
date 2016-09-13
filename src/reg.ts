/**
 * RegExp
 */

/**日期格式[yyyy-mm-dd] */
const date_reg = /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/;

/**邮箱 */
const email_reg = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)/;

/**ip */
const IP_reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])((\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}|(\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){5})$/;

/**账号或密码(字母开头，允许6-15字节，允许字母数字下划线) */
const verifyAccount_reg = /^[a-zA-Z][a-zA-Z0-9_]{5,14}$/;

/**url */
const url_reg = /[a-zA-z]+:\/\/[^\s]/;

/**去除字符串左右空格 */
const trim_reg = /(^\s*)|(\s*$)/g;

/**过滤字符串中的空格 */
const clearSpace_reg = /[ ]/g;

/**检测字符串中是否包含中文 */
const existCN_reg = /.*[\u4e00-\u9fa5]+.*$/;

/**保留数字 */
const num_reg = /[^\d]/g;

/**保留中文 */
const CN_reg = /[^\u4e00-\u9fa5\uf900-\ufa2d]/g;

/**过滤HTML标签 */
const HTMLTag_reg = /<\/?[^>]*>/g;

/**过滤HTML标签内联样式 */
const HTMLStyle_reg = / style\s*?=\s*?(['"])[\s\S]*?\1/g;

/**过滤nbsp; */
const nbsp_reg = /&nbsp;/ig;


/**
 * regObj
 */
class Reg {

  /**检测类型 */
  _testType(obj: any): any {
    return Object.prototype.toString.call(obj);
  }

  /**检测类型是否是Null、undefined或者'' */
  isNull(obj: any): boolean {
    return obj === '' || obj === undefined || obj === null ? true : false;
  }

  /**检测类型是否是Array */
  isArray(arr: any): boolean {
    const typeName = '[object Array]';
    return (this._testType(arr) === typeName);
  }

  /**检测类型是否是Function */
  isFunction(func: any): boolean {
    const typeName = '[object Function]';
    return (this._testType(func) === typeName);
  }

  /**检测类型是否是Object */
  isObject(obj: any): boolean {
    const typeName = '[object Object]';
    return (this._testType(obj) === typeName);
  }

  /**检测类型是否是String */
  isString(str: any): boolean {
    const typeName = '[object String]';
    return (this._testType(str) === typeName);
  }

  /**检测类型是否是Number */
  isNumber(num: any): boolean {
    const typeName = '[object Number]';
    return (this._testType(num) === typeName);
  }

  /**检测类型是否是Boolean */
  isBoolean(flag: any): boolean {
    const typeName = '[object Boolean]';
    return (this._testType(flag) === typeName);
  }

  /**
   * 如果object 不包含任何值，返回true。 对于字符串和数组对象，如length属性为0，那么返回true。
   */
  isEmpty(obj: any): boolean {
    let flag = true;

    if (this.isArray(obj) || this.isNumber(obj) || this.isString(obj)) {
      flag = obj.length === 0 ? true : false;
    }

    if (this.isObject(obj)) {
      for (let p in obj) {
        if (obj.hasOwnProperty(p)) {
          flag = false;
        }
      }
    }

    return flag;
  }


  /**检测正则 */
  _testRE(reg: RegExp, obj: any): boolean {
    return reg.test(obj);
  }

  /**根据正则替换 */
  _replaceRE(reg: RegExp, str: string | number, rStr: string): string {
    return str.toString().replace(reg, rStr);
  }

  /**验证日期格式[yyyy-mm-dd] */
  isDate(time: any): boolean {
    return this._testRE(date_reg, time);
  }

  /**验证邮箱 */
  isEamil(email: string): boolean {
    return this._testRE(email_reg, email);
  }

  /**验证ip */
  isIP(ip: string): boolean {
    return this._testRE(IP_reg, ip);
  }

  /**验证账号或密码(字母开头，允许6-15字节，允许字母数字下划线) */
  isVerifyAccount(account: string): boolean {
    return this._testRE(verifyAccount_reg, account);
  }

  /**验证url */
  isUrl(url: string): boolean {
    return this._testRE(url_reg, url);
  }

  /**检测字符串中是否包含中文 */
  existCN(text: string): boolean {
    return this._testRE(existCN_reg, text);
  }

  /**去除字符串左右空格 */
  trim(text: string | number): string {
    return this._replaceRE(trim_reg, text, '');
  }

  /**过滤字符串中的空格 */
  clearSpace(text: string): string {
    return this._replaceRE(clearSpace_reg, text, '')
  }

  /**保留数字 */
  getNum(text: string): number {
    return parseInt(this._replaceRE(num_reg, text, ''));
  }

  /**保留中文 */
  getCN(text: string): string {
    return this._replaceRE(CN_reg, text, '');
  }

  /**过滤HTML标签和nbsp; */
  excludeHTML(html: string): string {
    let reHTML = this._replaceRE(HTMLTag_reg, html, '');
    return this._replaceRE(nbsp_reg, reHTML, '');
  }

  /**过滤HTML标签内联样式但保留HTML标签 */
  excludeStyle(html: string): string {
    return this._replaceRE(HTMLStyle_reg, html, '');
  }

  constructor() {

  }
}

export { Reg }