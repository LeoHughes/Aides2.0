import Reg from './reg';

const _ = new Reg();

/**
 * Object
 */
export default class Obj {

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
   * 返回object对象所有的键。
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
   * 返回object对象所有的值。
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
   * 返回一个对象里所有的方法名。
   * 
   */
  methods(obj: any): any[] {
    let oArr = [];

    for (let v in obj) {
      if (_.isFunction(obj[v])) oArr.push(v);
    }

    return oArr;
  }

  /**
   * 去除对象里的假值键
   * 
   */
  objCompact(obj: any): any {
    let newObj = {};

    for (var v in obj) {
      if (obj[v]) {
        newObj[v] = obj[v];
      }
    }

    return newObj;
  }

  /**
   * 返回一个object副本，只过滤出keys[数组]参数指定的属性值。
   * 
   */
  pickKeys(obj: any, keys: string[]): any {
    let newObj = {};

    for (var v in keys) {
      if (obj.hasOwnProperty(keys[v])) {
        newObj[keys[v]] = obj[keys[v]];
      }
    }

    return newObj;
  }
  
  /**
   * 将对象合并为一个对象返回
   * 
   */
  assign(tarObj={},...objs):any{
    for (let i in objs) {

      for (let v in objs[i]) {
        if(!this.has(tarObj,objs[i][v])){
          tarObj[v] = objs[i][v];
        }
      }
      
    }
    return tarObj;
  }

  constructor() {

  }

}