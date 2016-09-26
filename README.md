## Aides工具包2.0
***

```
Aides2.0

|-- README.md
|-- package.json
|-- dist          # 统一打包构建目录
  |-- aidesWin.min.js
|-- mod           # 以commonjs模块化分别打包的工具包
  |-- aides.js     
  ...
|-- src           # 源码目录
  |-- aides.ts    
  |-- aidesWin.ts
  |-- arr.ts       
  |-- obj.ts       
  |-- reg.ts      
  |-- store.ts     
  |-- util.ts     # util模块，一些杂项的辅助方法
|-- doc           # 文档和demo
|-- gulpfile.js   # Gulp构建文件
|-- tsconfig.json # Typescript编译配置文件
|-- .babelrc      # babel编译配置文件
```
***

### aides Module

```
统一工具包(不包含Store模块)，适用于commonjs模块系统
```

### aidesWin Module

```
统一工具包(包含Store模块),直接适用于浏览器端,所有方法注册在全局变量_下
```

### arr Module

```
arr模块，主要是Array的辅助方法
```

### obj Module

```
obj模块，主要是Object的辅助方法
```

### reg Module
```
reg模块，主要是一些验证的方法
```

### store Module

```
store模块，主要是操作浏览器端cookie和localStorage的辅助方法，所以此模块在node后台环境下单独引入会失效
```

### util Module

```
util模块，一些杂项的辅助方法
```

### 引入

**浏览器端**：直接引入dist文件夹下的aidesWin.js
```js
<script src="dist/aidesWin.min.js"></script>
```

**commonjs**：将mod目录拷贝到项目内

```js
const Aides = require('./mod/aides');

const _ = new Aides.Aides();

console.log(_.size('abcd')); //4
```

或者单独引入某个模块

```js
const Util = require('./util');

const _ = new Util.Util();

console.log(_.exNum('123')); //一二三
```

### API

* [Arr API](https://github.com/LeoHughes/Aides2.0/blob/master/doc/Arr.md)
* [Obj API](https://github.com/LeoHughes/Aides2.0/blob/master/doc/Obj.md)
* [Reg API](https://github.com/LeoHughes/Aides2.0/blob/master/doc/Reg.md)
* [Store API](https://github.com/LeoHughes/Aides2.0/blob/master/doc/Store.md)
* [Util API](https://github.com/LeoHughes/Aides2.0/blob/master/doc/Util.md)