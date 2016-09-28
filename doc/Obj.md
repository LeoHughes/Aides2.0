## Obj Module

#### 引入模块[浏览器端直接使用全局变量_下同名的方法]

```js
const Obj = require('./mode/obj');
const _ = new Obj.Obj();
```

***

>***has***
>如果对象包含给定的键，返回true。

```js
let a = {'name':'Leo','age':25};

_.has(a,'age'); //true
_.has(a,'addr'); //false
```

>***keys***
>返回object对象所有的键。

```js
let a = {'name':'Leo','age':25};

_.keys(a); //['name','age']
```

>***values***
>返回object对象所有的值。

```js
let a = {'name':'Leo','age':25};

_.values(a); //['Leo',25]
```

>***methods***
>返回一个对象里所有的方法名, 已经排序的数组.

```js
let a = {'name':'Leo','age':25,'say':function(){alert('hello')}};

_.methods(a); //['say']
```