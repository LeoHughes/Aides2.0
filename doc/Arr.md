## Arr Module

#### 引入模块[浏览器端直接使用全局变量_下同名的方法]

```js
const Arr = require('./mode/arr');
const _ = new Arr.default();
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

>***getMin***
>获得数字数组中最小值 [会先剔除掉假值再返回最小值]

```js
let a = [null,1,undefined,2,'',3];

_.getMin(a); //1
```

>***getMax***
>获得数字数组中最小值 [会先剔除掉假值再返回最小值]

```js
let a = [null,1,undefined,2,'',3];

_.getMax(a); //3
```

>***unique***
>数组去除重复项[字符串数字和数字视为不同处理]

```js
let a = [null,1,undefined,2,'',3,'1',2,'3'];

_.unique(a); //[null,1,undefined,2,'',3,'1','3' ]
```

>***colUnique***
>数组去除重复对象
```js
let a = [
    {'name':'Leo','age':26},
    {'name':'Leo','age':26},
    {'name':'Hughes','age':25}
];

_.colUnique(a);//[{'name':'Leo','age':26}{'name':'Hughes','age':25}]
```

>***concat***
>数组合并去重 [字符串数字和数字视为不同处理]

```js
let a = [null,1,undefined,2,''],
    b = [3,'1',2,'3'];

_.concat(a,b); //[null, 1, undefined, 2, "", 3, "1", "3"]
```

>***toObj***
>将数组转换为对象。
   * list 键列表
   * values 值列表

```js
let a = ['name','age','email'],
    b = ['Leo','25','zhihy123@qq.com'];

_.toObj(a,b); //{name: "Leo", age: "25", email: "zhihy123@qq.com"}
```