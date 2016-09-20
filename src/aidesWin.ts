import { Aides } from './aides';

/**
 * AidesWin
 */
class AidesWin extends Aides {

  constructor() {
    super();
  }

}

  (function (window) {

    window._ = new AidesWin();

  })(window);