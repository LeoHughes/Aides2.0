import { Aides } from './aides';
import  Util  from './util';
import  Store  from './store';

const util = new Util(),
      store = new Store();

/**
 * AidesWin
 */
class AidesWin extends Aides {

  private getUrlParam = util.getUrlParam;

  private getCookie = store.getCookie;

  private setCookie = store.setCookie;

  private clearCookie = store.clearCookie;

  private getStoreItem = store.getStoreItem;

  private setStoreItem = store.setStoreItem;

  private setStoreObj = store.setStoreObj;

  private getStoreObj = store.getStoreObj;

  private removeStoreItem = store.removeStoreItem;

  private clearStore = store.clearStore;

  constructor() {
    super();
  }

}

(function (window) {

  (<any>window)._ = new AidesWin();

})(window);