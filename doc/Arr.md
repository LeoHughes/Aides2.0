## Arr Module

#### 引入模块[浏览器端直接使用全局变量_下同名的方法]

```js
const Arr = require('./mode/arr');
const _ = new Arr.Arr();
```

***

>***chunk***
>将数组拆分成多个长度的数组

```js
let a = [1,2,3,4,5,6,7];

_.chunk(a,2); //[[1,2],[3,4],[5,6],[7]]
```

>***compact***
>去除数组中的假值元素(null,undefined,'')

```js
let a = [null,1,undefined,2,'',3];

_.compact(a); //[1,2,3]
```