## Reg Module

#### 引入模块[浏览器端直接使用全局变量_下同名的方法]

```js
const Reg = require('./mode/reg');
const _ = new Reg.Reg();
```

***

>***isNull***
>检测类型是否是Null、undefined或者''

```js
_.isNull(null); //true
_.isNull(undefined); //true
_.isNull(''); //true
_.isNull('a'); //false
```

>***isArray***
>检测类型是否是Array

```js
let a = '123',
    b = [];

_.isArray(a); //false
_.isArray(b); //true
```

>***isFunction***
>检测类型是否是Function

```js
let a = function(){},
    b = {};

_.isFunction(a); //true
_.isFunction(b); //false
```

>***isObject***
>检测类型是否是Object

```js
let a = {},
    b = [],
    c = '123',
    d = null;

_.isObject(a); //true
_.isObject(b); //false
_.isObject(c); //false
_.isObject(d); //false
```

>***isString***
>检测类型是否是String

```js
let a = {},
    b = '123';

_.isString(a); //false
_.isString(b); //true
```

>***isNumber***
>检测类型是否是Number

```js
let a = 123,
    b = '123';

_.isNumber(a); //true
_.isNumber(b); //false
```

>***isBoolean***
>检测类型是否是Boolean

```js
let a = true,
    b = 'true';

_.isBoolean(a); //true
_.isBoolean(b); //false
```

>***isEmpty***
>如果object 不包含任何值，返回true。 对于字符串和数组对象，如length属性为0，那么返回true。

```js
let a = {'name':'leo'},
    b = [],
    c = '123';

_.isEmpty(a); //false
_.isEmpty(b); //true
_.isEmpty(c); //false
```

>***isDate***
>验证日期格式[yyyy-mm-dd]

```js
let a = '2016-10-01',
    b = '2016/10/01';

_.isDate(a); //true
_.isDate(b); //false
```

>***isEmail***
>验证邮箱

```js
let a = 'zhihy123@qq.com',
    b = 'Leo#Hughes.com';

_.isEmail(a); //true
_.isEmail(b); //false
```

>***isIP***
>验证ip

```js
let a = '192.168.1.1',
    b = '1991.05.09.1103';

_.isIP(a); //true
_.isIP(b); //false
```

>***isVerifyAccount***
>验证账号或密码(字母开头，允许6-15字节，允许字母数字下划线)

```js
let a = 'zhihy',
    b = 'zhihy_123';

_.isVerifyAccount(a); //false
_.isVerifyAccount(b); //true
```

>***isIDcard***
>验证身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X

```js
let a = 12345;

_.isIDcard(a); //false
```

>***isUrl***
>验证网址url

```js
let a = 'bing.com',
    b = 'http://cn.bing.com/';

_.isUrl(a); //false
_.isUrl(b); //true
```

>***existCN***
>检测字符串中是否包含中文

```js
let a = 'I’m 修斯',
    b = 'I’m LeoHughes';

_.existCN(a); //true
_.existCN(b); //false
```

>***trim***
>去除字符串左右空格

```js
let a = ' abc ';

_.trim(a); //abc
```

>***clearSpace***
>过滤字符串中的空格

```js
let a = ' a b c';

_.clearSpace(a); //abc
```

>***getNum***
>保留数字

```js
let a = 'a1b2c3d4';

_.getNum(a); //1234
```

>***getCN***
>保留中文

```js
let a = 'I’m 修斯';

_.getCN(a); //修斯
```

>***excludeHTML***
>过滤HTML标签和\&nbsp;

```js
let a = '<h1>a&nbsp;b&nbsp;</h1>';

_.excludeHTML(a); //ab
```

>***excludeStyle***
>过滤HTML标签内联样式但保留HTML标签

```js
let a = '<a style="color:red;"></a>';

_.excludeStyle(a); //<a></a>
```