### DefinePlugin

#### 描述

DefinePlugin 是 webpack 内置的插件，可以使用 `webpack.DefinePlugin` 直接获取。

#### 用途

这个插件用于创建一些在编译时可以配置的全局常量

#### 用法

```js
module.exports = {
  // ...
  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true), // const PRODUCTION = true
      VERSION: JSON.stringify('5fa3b9'), // const VERSION = '5fa3b9'
      BROWSER_SUPPORTS_HTML5: true, // const BROWSER_SUPPORTS_HTML5 = 'true'
      TWO: '1+1', // const TWO = 1 + 1,
      CONSTANTS: {
        APP_VERSION: JSON.stringify('1.1.2') // const CONSTANTS = { APP_VERSION: '1.1.2' }
      }
    }),
  ],
}
```



### copy-webpack-plugin

#### 描述

我们一般会把开发的所有源码和资源文件放在 src/ 目录下，构建的时候产出一个 build/ 目录，通常会直接拿 build 中的所有文件来发布。有些文件没经过 webpack 处理，但是我们希望它们也能出现在 build 目录下，这时就可以使用 CopyWebpackPlugin 来处理了。

#### 用途

用来复制文件

#### 用法

```js
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  // ...
  plugins: [
    new CopyWebpackPlugin([
      { from: 'src/file.txt', to: 'build/file.txt', }, // 顾名思义，from 配置来源，to 配置目标路径
      { from: 'src/*.ico', to: 'build/*.ico' }, // 配置项可以使用 glob
      // 可以配置很多项复制规则
    ]),
  ],
}
```

### ProvidePlugin

#### 描述

ProvidePlugin 也是一个 webpack 内置的插件，我们可以直接使用 webpack.ProvidePlugin 来获取。

#### 用途

该插件用于引用某些模块作为应用运行时的变量，从而不必每次都用 require 或者 import

#### 用法

```js
new webpack.ProvidePlugin({
  identifier: 'module',
  // ...
})

// 或者
new webpack.ProvidePlugin({
  identifier: ['module', 'property'], // 即引用 module 下的 property，类似 import { property } from 'module'
  // ...
})
```

### IgnorePlugin

#### 描述 

IgnorePlugin 和 ProvidePlugin 一样，也是一个 webpack 内置的插件，可以直接使用 webpack.IgonrePlugin 来获取。

#### 用途

用于忽略指定文件

#### 用法

```js
module.exports = {
  // ...
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ]
}
```

IgnorePlugin 配置的参数有两个，第一个是匹配引入模块路径的正则表达式，第二个是匹配模块的对应上下文，即所在目录名。