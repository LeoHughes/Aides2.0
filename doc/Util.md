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