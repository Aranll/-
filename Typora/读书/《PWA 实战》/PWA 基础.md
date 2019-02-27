### 特点

- 响应式
- 独立于网络连接
- 类似原生应用的交互体验
- 始终保持更新
- 安全
- 可发现
- 可重连
- 可安装
- 可链接

### 关键：Service Worker

#### Service Worker 的特点

- 运行在它自己的全局脚本上下文中
- 不绑定到具体的页面
- 无法修改网页中的元素，因为它无法访问 DOM
- 只能使用 HTTPS

#### Service Worker 生命周期

1. 当用户访问网站时，开始注册 Service Worker 
2. 在注册过程中，浏览器下载、解析和执行 Service Worker
3. 一旦 Service Worker 执行，就激活安装事件
4. 如果激活成功，Service Worker 现在就可以控制客户端并处理功能事件