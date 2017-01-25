import Reg from './reg';
import Obj from './obj';

const _ = new Reg(),
      o = new Obj();

/**
 * Array
 */


export default class Arr {

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
   * 获得数字数组中最小值 [会先剔除掉假值再返回最小值]
   * 
   */
  getMin(arr: any[]): any {
    let nArr   = this.compact(arr),
        val    = parseInt(nArr[0]),
        length = nArr.length;

    for (let v of nArr) {
      if (parseInt(v) < val) val = v;
    }

    return val;
  }

  /**
   * 获得数字数组中最大值 [会先剔除掉假值再返回最大值]
   * 
   */
  getMax(arr: any[]): any {
    let nArr   = this.compact(arr),
        val    = parseInt(nArr[0]),
        length = nArr.length;

    for (let v of nArr) {
      if (parseInt(v) > val) val = v;
    }

    return val;
  }

  /**
   * 数组去除重复项[字符串数字和数字视为不同处理]
   * 
   */
  unique(arr: any[]): any[] {
    let uq     = {},
        outArr = [],
        prefix = '';

    for (let v in arr) {

      if (_.isString(arr[v])) {
        prefix = '_str';
      } else {
        prefix = '';
      }

      if (!uq[arr[v] + prefix]) {
        uq[arr[v] + prefix] = true;
        outArr.push(arr[v]);
      }

    }

    return outArr;
  }

  /**
   * 数组去除重复对象
   * 
   */
  colUnique(arr: any[]): any[] {
    let output = {};

    arr.map((v)=>{
      output[JSON.stringify(v)] = 'z';
    })

    return o.keys(output).map((v)=>{
      return JSON.parse(v);
    });

  }

  /**
   * 数组合并去重 [字符串数字和数字视为不同处理]
   * 
   */
  concat(...arr: any[]): any[] {
    return this.unique([].concat(...arr));
  }

  /**
   * 将数组转换为对象。
   * 
   * list 键列表
   * values 值列表
   * 
   */
  toObj(list: any[], values: any[]): any {
    let nObj = {};

    for (let v in list) {
      if (!values[v]) nObj[list[v]] = null;
      
      nObj[list[v]] = values[v];
    }

    return nObj;
  }


  constructor() {

  }

}