## Cookie

### 简介

> Cookie 的本职工作并非本地存储，而是“维持状态”

Cookie 是存储在浏览器的一个文本文件，当浏览器和服务器通信时，它携带着用户信息，附着在 HTTP 请求上，当服务器校验成功后，便可以获取客户端的状态。

### 性能劣势

- 不够大：最大只有 4KB，超出截断
- 过量的 Cookie 会带来巨大的性能开销：每一个 HTTP 请求都会携带 Cookie，包括不用校验 Cookie 的请求如请求图片资源或者 CSS 文件

## Web Storage

> Web Storage 是 HTML5 专门为浏览器存储而提供的数据存储机制，它分为 Local Storage 与 Session Storage



请描述一下 cookies，sessionStorage 和 localStorage 的区别？

A: sessionStorage 和 localStorage 是HTML5 Web Storage API 提供的，可以方便的在web请求之间保存数据。有了本地数据，就可以避免数据在浏览器和服务器间不必要地来回传递。

sessionStorage、localStorage、cookie都是在浏览器端存储的数据，其中sessionStorage 的概念很特别，引入了一个“浏览器窗口”的概念。sessionStorage 是在同源的同窗口（或tab）中，始终存在的数据。也就是说只要这个浏览器窗口没有关闭，即使刷新页面或进入同源另一页面，数据仍然存在。关闭窗口后，sessionStorage 即被销毁。同时“独立”打开的不同窗口，即使是同一页面，sessionStorage 对象也是不同的

cookies会发送到服务器端。其余两个不会。

Microsoft 指出 Internet Explorer 8 增加cookie 限制为每个域名50个，但IE7 似乎也允许每个域名50个cookie。Firefox 每个域名cookie 限制为50个。Opera每个域名cookie 限制为30个。Firefox 和Safari 允许cookie 多达4097个字节，包括名（name）、值（value）和等号。Opera 许cookie 多达4096个字节，包括：名（name）、值（value）和等号。Internet Explorer 允许cookie 多达4095个字节，包括：名（name）、值（value）和等号。

- Cookie
  - 每个域名存储量比较小（各浏览器不同，大致4K）
  - 所有域名的存储量有限制（各浏览器不同，大致4K）
  - 有个数限制（各浏览器不同）
  - 会随请求发送到服务器
- LocalStorage
  - 永久存储
  - 单个域名存储量比较大（推荐5MB，各浏览器不同）
  - 总体数量无限制
- SessionStorage
  - 只在 Session 内有效
  - 存储量更大（推荐没有限制，但是实际上各浏览器也不同）

## indexDB

> IndexDB 是一个运行在浏览器上的非关系型数据库。