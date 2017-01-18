## Obj Module

#### 引入模块[浏览器端直接使用全局变量_下同名的方法]

```js
const Obj = require('./mode/obj');
const _ = new Obj.default();
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

>***objCompact***
>去除对象里的假值键

```js
let a = {'name':'Leo','age':'','email':null}

_.objCompact(a); //{name: "Leo"}
```

>***pickKeys***
>返回一个object副本，只过滤出keys[数组]参数指定的属性值。

```js
let a = {'name':'Leo','age':25,'say':function(){alert('hello')}};

_.pickKeys(a,['age','say']); //{'age':25,'say':function(){alert('hello')}};
```

>***assign***
>将对象合并为一个对象返回

```js
let a = {'name':'Leo'},
    b = {'age':25},
    c = {'email':'zhihy123@qq.com'};

_.assign({},a,b,c); //{name: "Leo", age: 25, email: "zhihy123@qq.com"}
```