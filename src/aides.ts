import { Reg } from './reg';
import { Util } from './util';
import { Arr } from './arr';
import { Obj } from './obj';

const reg = new Reg(),
  util = new Util(),
  arr = new Arr(),
  obj = new Obj();


/**
 * Aides
 */
class Aides {

  private isNull = reg.isNull;

  private isArray = reg.isArray;

  private isFunction = reg.isFunction;

  private isObject = reg.isObject;

  private isString = reg.isString;

  private isNumber = reg.isNumber;

  private isBoolean = reg.isBoolean;

  private isEmpty = reg.isEmpty;

  private isDate = reg.isDate;

  private isEmail = reg.isEmail;

  private isIP = reg.isIP;

  private isVerifyAccount = reg.isVerifyAccount;

  private isUrl = reg.isUrl;

  private existCN = reg.existCN;

  private trim = reg.trim;

  private clearSpace = reg.clearSpace;

  private getNum = reg.getNum;

  private getCN = reg.getCN;

  private excludeHTML = reg.excludeHTML;

  private excludeStyle = reg.excludeStyle;

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

  constructor() {

  }

}

export { Aides }

