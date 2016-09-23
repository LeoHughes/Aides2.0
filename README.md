##Aides工具包2.0

```
Aides2.0

|-- README.md
|-- package.json
|-- dist          # 统一打包构建目录
  |-- aidesWin.js # 适用于浏览器端的统一工具包
|-- mod           # 以commonjs模块化分别打包的工具包
  |-- aides.js    # 适用于commonjs模块系统的统一工具包
|-- src           # 源码目录
  |-- aides.ts    # 统一工具包(不包含Store模块)
  |-- aidesWin.ts # 统一工具包(包含Store模块)
  |-- arr.ts      # arr模块，主要是Array的辅助方法
  |-- obj.ts      # obj模块，主要是Object的辅助方法
  |-- reg.ts      # reg模块，主要是一些验证的方法
  |-- store.ts    # store模块，操作cookie和localStorage的辅助方法
  |-- util.ts     # util模块，一些杂项的辅助方法
|-- gulpfile.js   # Gulp构建文件
|-- tsconfig.json # Typescript编译配置文件
|-- .babelrc      # babel编译配置文件
```
