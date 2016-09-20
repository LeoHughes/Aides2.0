import { Reg } from './reg';

const _ = new Reg();

// let storage = window.localStorage;

/**
 * store
 *  
 */

class Store {

  private storage;

  private document;

  /**
   * 根据name获取cookie值，若无则返回空
   */
  getCookie(name: string): string {
    const cname = `${name}=`;
    let cookieVal = '';

    if (this.document.cookie) {
      const ca = this.document.cookie.split(';');

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

    this.document.cookie = `${name}=${value};${expires}`;
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
    if (!_.isNull(this.storage)) {
      return this.storage.getItem(name);
    }
  }

  /**
   * 根据name设置localStorage本地存储[name相同，后面会覆盖前面的存储值]
   */
  setStoreItem(name: string, val: string): void {
    if (!_.isNull(this.storage)) {
      return this.storage.setItem(name, val);
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
    let len = this.storage.length,
      obj = {};

    for (var i = 0; i < len; i++) {
      var key = this.storage.key(i),
        val = this.getStoreItem(key);

      obj[key] = val;
    }

    return obj;
  }

  /**
   * 根据name删除localStorage存储的值,成功则返回true
   */
  removeStoreItem(name: string): boolean {
    this.storage.removeItem(name);
    return this.getStoreItem(name) === null ? true : false;
  }

  /**
   * 清空localStorage的所有数据
   */
  clearStore(): void {
    this.storage.clear();
  }


  constructor(win = window || undefined,doc = document || undefined) {
    if(win) this.storage = win.localStorage;
    if(doc) this.document = doc; 
  }

}

export { Store }