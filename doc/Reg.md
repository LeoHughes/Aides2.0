## Reg Module

#### 引入模块[浏览器端直接使用全局变量_下同名的方法]

```js
const Reg = require('./mode/reg');
const _ = new Reg.Reg();
```

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