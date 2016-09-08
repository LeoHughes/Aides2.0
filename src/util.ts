import { Reg } from './reg';

const _ = new Reg();

/**
 * util
 */

class Util {

  /**
   * 控制台输出
   */
  log(text: string, type: string): void {
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
  }

  /**
   * 字符串截取
   *
   * length:截取位数
   * separator:截断的符号
   *
   * var a = 'this is a text,ohoh!'
   * trunc(a,13,'.') =>   'this is a text.'
   *
   */
  trunc(text: string, length: number, separator: string): string {
    let len = length || text.length,
      codes = _.isNull(separator) ? '...' : separator.toString();

    return (text.substring(0, len) + codes);
  }

  /**
   * 字符串重复
   *
   * length:重复次数
   *
   * var a = 'a'
   * repeat(a,3) => 'aaa'
   *
   */
  repeat(text: string, length: number): string {
    let outStr = '';

    if (_.isString(text)) {
      for (let i = 0; i < length; i++) {
        outStr += text;
      }
    }
    return outStr;
  }

  /**
   * 获取当前时间(年月日)
   *
   * type:CN中文格式
   *
   * _.getDate() => 2014-04-26
   * _.getDate('CN') => 2014年04月26日
   *
   */
  getDate(type: string): string {
    let time = new Date(),
      year = time.getFullYear(),
      m = time.getMonth() + 1,
      month = m < 10 ? ('0' + m) : m,
      d = time.getDate(),
      day = d < 10 ? ('0' + d) : d,
      dateText = '';

    if (type === 'CN') {
      return dateText += year + '年' + month + '月' + day + '日';
    } else {
      return dateText += year + '-' + month + '-' + day;
    }
  }

  /**
   * 获取当前时间(时分秒)
   *
   * type:CN中文格式
   *
   * _.getTimes() => 17:06:25
   * _.getTimes('CN') => 17时06分25秒
   *
   */
  getTimes(type: string): string {
    let time = new Date(),
      hours = time.getHours(),
      m = time.getMinutes(),
      minutes = m < 10 ? ('0' + m) : m,
      s = time.getSeconds(),
      seconds = s < 10 ? ('0' + s) : s,
      dateText = '';

    if (type === 'CN') {
      return dateText += hours + '时' + minutes + '分' + seconds + '秒';
    } else {
      return dateText += hours + ':' + minutes + ':' + seconds;
    }
  }


  constructor() {

  }

}


export { Util }