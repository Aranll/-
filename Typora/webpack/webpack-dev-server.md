### 描述

webpack-dev-server 是 webpack 官方提供的一个工具，可以基于当前的 webpack 构建配置快速启动一个静态服务。当 mode 为 development 时，会具备 hot reload 的功能，即当源码文件变化时，会即时更新当前页面，显示最新的效果。

### 使用

package.json 中的 scripts 配置：

```json
{
    "scripts": {
        "dev": "webpack-dev-server"
    }
}
```

```shell
npm run dev
```

### 配置

#### devServer 属性常用配置

|  属性名称   |                             作用                             |
| :---------: | :----------------------------------------------------------: |
|   public    |       指定静态服务的域名（默认 http://localhost:8080）       |
|    port     |               指定静态服务的端口（默认 8080）                |
| publicPath  |           指定浏览构建好的文件的路径（默认 ‘ / ’）           |
|    proxy    | 配置 webpack-dev-server 将特定 URL 的请求代理到另外一台服务器 |
| contentBase |     提供额外静态文件内容的目录（没有经过 webpack 构建）      |
|   before    | 在 webpack-dev-server 静态资源中间件处理之前，拦截部分请求返回特定内容 |
|    after    | 在 webpack-dev-server 静态资源中间件处理之后，用于打印日志或其它处理 |

