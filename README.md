## Aides工具包2.0

```
Aides2.0

|-- README.md
|-- package.json
|-- dist          # 统一打包构建目录
  |-- aidesWin.js
|-- mod           # 以commonjs模块化分别打包的工具包
  |-- aides.js     
|-- src           # 源码目录
  |-- aides.ts    
  |-- aidesWin.ts
  |-- arr.ts       
  |-- obj.ts       
  |-- reg.ts      
  |-- store.ts     
  |-- util.ts     # util模块，一些杂项的辅助方法
|-- gulpfile.js   # Gulp构建文件
|-- tsconfig.json # Typescript编译配置文件
|-- .babelrc      # babel编译配置文件
```

### aides Module

```
统一工具包(不包含Store模块)，适用于commonjs模块系统
```

### aidesWin Module

```
统一工具包(包含Store模块),直接适用于浏览器端
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
store模块，主要是操作浏览器端cookie和localStorage的辅助方法
```

### util Module

```
util模块，一些杂项的辅助方法
```
