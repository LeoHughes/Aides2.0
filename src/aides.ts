import { Reg } from './reg';
import { Util } from './util';
import { Store } from './store';
import { Arr } from './arr';
import { Obj } from './obj';

/**
 * Aides
 */
class Aides {

  protected reg: Reg;

  protected util: Util;

  protected store: Store;

  protected arr: Arr;

  protected obj: Obj;

  constructor() {
    this.reg = new Reg();
    this.util = new Util();
    this.store = new Store();
    this.arr = new Arr();
    this.obj = new Obj();
  }

}

export { Aides }


/**
 * 如果是浏览器环境，将工具包附加在window上
 */

if (window) {

  (function (window) {

    window._ = new Aides();

  })(window);

}

