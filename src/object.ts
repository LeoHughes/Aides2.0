import { Reg } from './reg';

const _ = new Reg();

/**
 * Object
 */
class Object {

  /**
   * 如果对象包含给定的键，返回true。
   * 
   */
  has(obj: any, key: string): boolean {
    let flag = false;

    if (_.isObject(obj)) {
      for (var v in obj) {
        if (v === key) flag = true;
      }
    }

    return flag;
  }

  /**
   * 获取object对象所有的属性名称。
   * 
   */
  keys(obj: any): any[] {
    let oArr = [];
    if (_.isObject(obj)) {
      for (let p in obj) {
        if (this.has(obj, p)) oArr.push(p);
      }
    }

    return oArr;
  }

  /**
   * 返回object对象所有的属性值。
   * 
   */
  values(obj: any): any[] {
    let oArr = [];
    if (_.isObject(obj)) {
      for (var v in obj) {
        if (this.has(obj, v)) oArr.push(obj[v]);
      }
    }

    return oArr;
  }

  /**
   * 返回一个对象里所有的方法名, 已经排序的数组.
   * 
   */
  methods(obj): any[] {
    let oArr = [];
    for (let v in obj) {
      if (_.isFunction(obj[v])) oArr.push(v);
    }
    return oArr;
  }


  constructor() {

  }

}

export { Object }