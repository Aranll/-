### 描述

Webpack 不原生支持解析非 JavaScript 类型的文件，如果要支持，则需要使用 Webpack 的 Loader 机制。

### 使用

> Loader 可以看作具有文件转换功能的翻译员，Webpack 通过配置文件里的 module.rules 数组配置的规则对对应的文件采用指定的 Loader 进行加载和转换。