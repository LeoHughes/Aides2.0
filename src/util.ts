import  Reg  from './reg'
import  Obj  from './obj'

const _ = new Reg()
const o = new Obj()

/**
 * util
 */

export default class Util {

  /**
   * 获得字符串、数组的长度,获得对象的属性数量,数字小数点前的位数
   */
  size(el: any): number {
    let length

    if (_.isString(el) || _.isArray(el)) {
      length = el.length
    } else if (_.isObject(el)) {
      length = o.keys(el).length
    } else if (_.isNumber(el)) {
      el = el.toString().split('.')[0]
      length = el.length
    }

    return length
  }


  /**
   * 字符串截取
   *
   * length:截取位数
   * separator:截断的符号
   *
   */
  trunc(text: string, len: number, separator: string): string {
    let codes = _.isNull(separator) ? '...' : separator.toString()

    return (text.substring(0, len) + codes)
  }

  /**
   * 字符串重复
   *
   * length:重复次数
   *
   */
  repeat(text: string, length: number): string {
    let outStr = ''

    if (_.isString(text)) {
      for (let i = 0; i < length; i++) {
        outStr += text
      }
    }
    return outStr
  }

  /**
   * 获取当前日期(年月日)
   *
   * separator:分隔符号
   *
   */
  getDate(sepr = '/'): string {
    const dateArr = this.getDateArr()

    return `${dateArr[0]}${sepr}${dateArr[1]}${sepr}${dateArr[2]}`
  }

  /**
   * 获取当前日期中文格式(年月日)
   */
  getCNDate(): string {
    const dateArr = this.getDateArr()

    return `${dateArr[0]}年${dateArr[1]}月${dateArr[2]}日`
  }

  /**
   * 获取当前时间(时分秒)
   *
   */
  getTimes(sepr = ':'): string {
    const dateArr = this.getTimesArr()

    return `${dateArr[0]}${sepr}${dateArr[1]}${sepr}${dateArr[2]}`

  }

  /**
   * 获取当前时间中文格式(时分秒)
   *
   */
  getCNTimes(): string {
    const dateArr = this.getTimesArr()

    return `${dateArr[0]}时${dateArr[1]}分${dateArr[2]}秒`

  }

  /**
   * 以数组返回当前时间[年月日]
   *
   */
  getDateArr(): Array<string> {
    let time = new Date()
    let year = time.getFullYear()
    let m = time.getMonth() + 1
    let month = m < 10 ? ('0' + m) : m
    let d = time.getDate()
    let day = d < 10 ? ('0' + d) : d
    let outArr = []

    outArr.push(year.toString())
    outArr.push(month.toString())
    outArr.push(day.toString())

    return outArr
  }

  /**
   * 以数组返回当前时间[时分秒]
   *
   */
  getTimesArr(): Array<string> {
    let time = new Date()
    let hours = time.getHours()
    let m = time.getMinutes()
    let minutes = m < 10 ? ('0' + m) : m
    let s = time.getSeconds()
    let seconds = s < 10 ? ('0' + s) : s
    let outArr = []

    outArr.push(hours.toString())
    outArr.push(minutes.toString())
    outArr.push(seconds.toString())

    return outArr
  }

  /**
   * 将阿拉伯数字转为汉字数字
   */
  exNum(charNum: number | string): string {
    let charArr = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十']
    let num = charNum.toString()
    let numArr = num.split('')
    let len = numArr.length
    let result = ''

    for (let i = 0; i < len; i++) {
      result += charArr[parseInt(numArr[i], 10)]
    }

    return result
  }

  /**
   * 生成范围随机数
   */
  randomNum(start: number, end: number): number {
    return Math.floor(Math.random() * (end - start) + start)
  }

  /**
   * 随机验证码[0-12位]
   * 
   * num:验证码位数
   */
  getCode(num = 4): string {
    let random = Math.random()
    return random.toString(16).substr(3, num)
  }

  /**
   * 根据日期获取星期，为空则获取当前时间星期
   *
   */
  getWeek(date?: string): string {
    date = date || (this.getDate('-'))

    return '星期' + this.exNum(new Date(date).getDay())
  }

  /**
   * 来获得一个当前时间的整数时间戳
   *
   */
  now(): string {
    const tArr = this.getDateArr().concat(this.getTimesArr())
    return tArr.join('')
  }

  /**
   * 获取url参数并转为string|object返回
   * 
   */
  getUrlParam(): any {
    const reg_url = window.location.search

    let reg_arr = []
    let url_obj = {}

    if (reg_url) {
      if (reg_url.indexOf('&') !== -1) {

        reg_arr = reg_url.substr(1).split('&')

        for (let v of reg_arr) {
          let key   = v.split('=')[0]
          let value = v.split('=')[1]

          url_obj[key] = value
        }

        return url_obj

      } else {
        return reg_url.substr(1)
      }
    }

  }

  /**
   *  setInterval方法
   *
   *  callback 执行方法
   *  time 执行间隔时间
   *  endTime 结束时间[为空将一直执行]
   *  endCallback 结束后的执行方法
   *
   **/
  setTimesDo(callback: any, time: number, endTime: number, endCallback: any): void {

    if (!_.isNull(time) && !_.isNull(callback)) {

      if (endTime) {

        let t = setInterval(() => {
          callback()
        }, time)

        setTimeout(() => {
          clearInterval(t)
          
          if (endCallback) endCallback()
        }, time + endTime)

      } else {
        setInterval(callback, time)
      }
    }

  }


  constructor() {

  }

}