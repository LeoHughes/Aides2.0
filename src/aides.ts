import { Reg } from './reg';
import { Util } from './util';


/**
 * Aides
 */
class Aides {

  protected reg: Reg;

  constructor() {
    this.reg = new Reg();
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

