import { Reg } from './reg';

const _ = new Reg();

/**
 * Array
 */


class Array {

  /**
   * 将 array 拆分成多个 size 长度的数组
   * 
   */
  chunk(arr: any[], size: number): any[] {
    let outArr = [],
      length = arr.length;

    for (let i = 0; i < length; i += size) {
      let inArr = arr.slice(i, i + size);
      outArr.push(inArr);
    }

    return outArr;
  }

  /**
   * 去除数组中的假值元素(null,undefined,'')
   * 
   */
  compact(arr: any[]): any[] {
    let outArr = [];
    for (let v of arr) {
      if (v) outArr.push(v);
    }
    return outArr;
  }

  /**
   * 一维数组删除指定的值
   * 
   */
  delValue(arr: any[], val: any): any[] {
    for (let v of arr) {
      if (v == val) arr.splice(arr.indexOf(v), 1);
    }
    return arr;
  }


  constructor() {

  }

}

export { Array }