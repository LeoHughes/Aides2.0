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
   * 获取当前日期(年月日)
   *
   * separator:分隔符号
   *
   */
  getDate(sepr = '/'): string {
    const dateArr = this._getDate();

    return `${dateArr[0]}${sepr}${dateArr[1]}${sepr}${dateArr[2]}`;
  }

  /**
   * 获取当前日期中文格式(年月日)
   */
  getCNDate(): string {
    const dateArr = this._getDate();

    return `${dateArr[0]}年${dateArr[1]}月${dateArr[2]}日`;
  }

  /**
   * 获取当前时间(时分秒)
   *
   */
  getTimes(sepr = ':'): string {
    const dateArr = this._getTimes();

    return `${dateArr[0]}${sepr}${dateArr[1]}${sepr}${dateArr[2]}`;

  }

  /**
   * 获取当前时间中文格式(时分秒)
   *
   */
  getCNTimes(): string {
    const dateArr = this._getTimes();

    return `${dateArr[0]}时${dateArr[1]}分${dateArr[2]}秒`;

  }

  /**
   * 以数组返回当前时间[年月日]
   *
   */
  private _getDate(): Array<string> {
    let time = new Date(),
      year = time.getFullYear(),
      m = time.getMonth() + 1,
      month = m < 10 ? ('0' + m) : m,
      d = time.getDate(),
      day = d < 10 ? ('0' + d) : d,
      outArr = [];

    outArr.push(year.toString());
    outArr.push(month.toString());
    outArr.push(day.toString());

    return outArr;
  }

  /**
   * 以数组返回当前时间[时分秒]
   *
   */
  private _getTimes(): Array<string> {
    var time = new Date(),
      hours = time.getHours(),
      m = time.getMinutes(),
      minutes = m < 10 ? ('0' + m) : m,
      s = time.getSeconds(),
      seconds = s < 10 ? ('0' + s) : s,
      outArr = [];

    outArr.push(hours.toString());
    outArr.push(minutes.toString());
    outArr.push(seconds.toString());

    return outArr;
  }

  /**
   * 将阿拉伯数字转为汉字数字
   */
  exNum(year: number | string): string {
    var charArr = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'],
      num = year.toString(),
      numArr = num.split(''),
      len = numArr.length,
      result = '';

    for (var i = 0; i < len; i++) {
      result += charArr[parseInt(numArr[i])];
    }

    return result;
  }

  /**
   * 生成范围随机数
   */
  randomNum(start: number, end: number): number {
    return Math.floor(Math.random() * (end - start) + start);
  }

  /**
   * 随机验证码
   * 
   * num:验证码位数
   */
  getCode(num: number): string {
    let random = Math.random();
    return random.toString(16).substr(2, num);
  }


  constructor() {

  }

}


export { Util }