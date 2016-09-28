## Util Module

#### 引入模块[浏览器端直接使用全局变量_下同名的方法]

```js
const Util = require('./mode/util');
const _ = new Util.Util();
```

***

>***log***
>控制台输出

```js
_.log('hello');
_.log('hello','warn');
```

>***size***
>获得字符串、数组的长度,获得对象的属性数量,数字小数点前的位数

```js
let a = 'hello aides',
    b = 19910509,
    c = {'name':'Leo','age':25}

_.size(a); //11
_.size(b); //8
_.size(c); //2
```

>***trunc***
>字符串截取
* text:要截取的字符串
* length:截取位数
* separator:截断的符号

```js
let a = 'hello aides';

_.trunc(a,5); //hello...
_.trunc(a,5,'.'); //hello.
```

>***repeat***
>字符串重复

```js
let a = 'a';

_.repeat(a,3); //aaa
```

>***getDate***
>获取当前日期(年月日)
* separator:分隔符号

```js
_.getDate(); //2016/09/28
_.getDate('-'); //2016-09-28
```

>***getCNDate***
>获取当前日期中文格式(年月日)

```js
_.getCNDate(); //2016年09月28日
```

>***getTimes***
>获取当前时间(时分秒)
* sepr:间隔符

```js
_.getTimes(); //18:43:25
_.getTimes('-'); //18-43-58
```

>***getCNTimes***
>获取当前时间中文格式(时分秒)

```js
_.getCNTimes(); //18时47分01秒
```

>***exNum**
>将阿拉伯数字转为汉字数字

```js
_.exNum(1991); //一九九一
```

>***randomNum***
>生成范围随机数

>***getCode***
>随机验证码[0-12位]
* num:验证码位数

```js
_.getCode(8); //8c5116f0
```

>***getWeek***
>根据日期获取星期，为空则获取当前时间星期

```js
_.getWeek(); //星期三
_.getWeek('2016-09-29'); //星期四
```

>***now***
>来获得一个当前时间的整数时间戳

```js
_.now(); //20160928190832
```

>***getUrlParam***
>获取url参数并转为string|object返回[只适用于浏览器端]

```js
//'http://www.baidu.com?leo'
 _.getUrlParam(); //'leo'

//'http://www.baidu.com?name=leo&age=25'
 _.getUrlParam(); //{'name':'leo','age':'25'}
```

>***setTimesDo***
>setInterval方法
*  callback 执行方法
*  time 执行间隔时间
*  endTime 结束时间[为空将一直执行]
*  endCallback 结束后的执行方法

```js
var i = 0;
_.setTimesDo(function(){
    console.log(i++);
},1000,5000,function(){
    console.log('end');
})
//0
//1
//2
//3
//4
//5
//end
```