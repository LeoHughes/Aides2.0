import { Reg } from './reg';
import { Util } from './util';
import { Arr } from './arr';
import { Obj } from './obj';

const util = new Util(),
  arr = new Arr(),
  obj = new Obj();


/**
 * Aides
 */
class Aides extends Reg {

  private log = util.log;

  private size = util.size;

  private trunc = util.trunc;

  private repeat = util.repeat;

  private getDate = util.getDate;

  private getCNDate = util.getCNDate;

  private getTimes = util.getTimes;

  private getCNTimes = util.getCNTimes;

  private getDateArr = util.getDateArr;

  private getTimesArr = util.getTimesArr;

  private exNum = util.exNum;

  private randomNum = util.randomNum;

  private getCode = util.getCode;

  private getWeek = util.getWeek;

  private now = util.now;

  private setTimesDo = util.setTimesDo;

  private chunk = arr.chunk;

  private compact = arr.compact;

  private getMin = arr.getMin;

  private getMax = arr.getMax;

  private unique = arr.unique;

  private concat = arr.concat;

  private toObj = arr.toObj;

  private has = obj.has;

  private keys = obj.keys;

  private values = obj.values;

  private methods = obj.methods;

  private objCompact = obj.objCompact;

  private pickKeys = obj.pickKeys;

  private assign = obj.assign;

  /**输出工具包所有方法名称 */
  private all = () => {
    const fucArr = this.methods(this);
    for (let v of fucArr) {
      this.log(`[${v}]`, 'info');
    }
  }

  /**
   * 工具包扩展(属性或方法)
   * 
   * key 扩展的键名称
   * fn 扩展的值
   * 
   */
  private extend = (key: string, fn: any) => {
    const fucArr = this.methods(this);

    if (fucArr.indexOf(key) === -1) {
      this[key] = fn;
    }
  }

  constructor() {
    super()
  }

}

export { Aides }

