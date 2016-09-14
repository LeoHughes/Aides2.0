import { Reg } from './reg';

const _ = new Reg();

let storage = window.localStorage;

/**
 * store
 *  
 */

class Store {

  /**
   * 根据name获取cookie值，若无则返回空
   */
  getCookie(name: string): string {
    const cname = `${name}=`;
    let cookieVal = '';

    if (document.cookie) {
      const ca = document.cookie.split(';');

      for (let key of ca) {
        let c = _.trim(key);
        if (c.indexOf(cname) === 0) {
          cookieVal = c.substring(cname.length, c.length);
        }
      }
    }
    return cookieVal;
  }

  /**
   * 设置cookie
   *
   * name  cookie名称
   * value cookie值
   * time  cookie过期时间,单位秒
   *
   **/
  setCookie(name: string, value: string, time: number): void {
    let d = new Date(),
      expires;

    d.setTime(d.getTime() + (time * 1000));
    expires = "expires=" + d.toUTCString();

    document.cookie = `${name}=${value};${expires}`;
  }

  /**
   * 根据name清除cookie
   */
  clearCookie(name: string): void {
    this.setCookie(name, '', -1);
  }

  /**
   * 根据name获取localStorage存储的值
   */
  getStoreItem(name: string): string {
    if (!_.isNull(storage)) {
      return storage.getItem(name);
    }
  }

  /**
   * 根据name设置localStorage本地存储[name相同，后面会覆盖前面的存储值]
   */
  setStoreItem(name: string, val: string): void {
    if (!_.isNull(storage)) {
      return storage.setItem(name, val);
    }
  }

  /**
   * 根据object设置localStorage本地存储
   */
  setStoreObj(obj: any): void {
    if (_.isObject(obj)) {
      for (var v in obj) {
        this.setStoreItem(v, obj[v]);
      }
    }
  }

  /**
   * 将localStorage以Object返回
   */
  getStoreObj(): any {
    let len = storage.length,
      obj = {};

    for (var i = 0; i < len; i++) {
      var key = storage.key(i),
        val = this.getStoreItem(key);

      obj[key] = val;
    }

    return obj;
  }


  constructor() {

  }

}

export { Store }