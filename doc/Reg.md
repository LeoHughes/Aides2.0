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