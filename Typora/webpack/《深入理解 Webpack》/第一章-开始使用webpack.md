### 描述

- Webpack 在执行构建时默认会从项目根目录下的 webpack.config.js 文件中读取配置，同样我们可以指定配置文件。

- webpack.config.js 文件描述了一个如何构建的 Object。同时，由于 Webpack 构建运行在 Node.js 环境下，所以需要通过 CommonJS 规范导出该 Object。
- Webpack 会从入口文件出发，识别出源码中的模块化导入语句，递归地找出入口文件的所有依赖，将入口文件和其所有依赖打包到一个单独

