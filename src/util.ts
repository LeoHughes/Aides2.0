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



  constructor() {

  }

}


export { Util }