import { Reg } from './reg';
import { Util } from './util';
import { Store } from './store';
import { Array } from './array';

/**
 * Aides
 */
class Aides {

  protected reg: Reg;

  protected util: Util;

  protected store: Store;

  protected array: Array;

  constructor() {
    this.reg = new Reg();
    this.util = new Util();
    this.store = new Store();
    this.array = new Array();
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

