import { Reg } from './reg';
import { Util } from './util';
import { Store } from './store';
import { Array } from './array';
import { Object } from './object';

/**
 * Aides
 */
class Aides {

  protected reg: Reg;

  protected util: Util;

  protected store: Store;

  protected array: Array;

  protected object: Object;

  constructor() {
    this.reg = new Reg();
    this.util = new Util();
    this.store = new Store();
    this.array = new Array();
    this.object = new Object();
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

