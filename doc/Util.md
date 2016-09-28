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

_.size(a);
_.size(b);
_.size(c);
```