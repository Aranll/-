### DOM 为什么这么慢

> 把 DOM 和 JavaScript 各自想象成一个岛屿，他们之间用收费桥梁连接。《高性能 JavaScript》

这个问题可以从两个点去解答。

第一个点，我们知道浏览器内核里面有两个引擎，一个是 JS 引擎，一个是渲染引擎，它们是彼此分开的，且每一次使用 JS 去操作 DOM，两个引擎之间都会发生“跨界交流”，而这个过程是有性能开销的，访问的量大会造成明显的性能问题。

第二个点，当我们使用 JS 操作 DOM 时，当 DOM 节点被修改时，会触发渲染树（Render Tree）的变化，从而触发重绘或回流。

- 重绘：当我们对 DOM 的修改导致了样式的变化、却并未影响其几何属性（比如只修改了颜色或背景色）时，浏览器不需要重新计算元素的几何属性、直接为该元素绘制新的样式（没有回流）。
- 回流：当我们对 DOM  的修改引发了 DOM  几何尺寸的变化（比如修改元素的宽、高或隐藏元素等）时，浏览器需要重新计算元素的几何属性（其它元素的几何属性和位置也会因此受到影响），然后再将计算的结果绘制出来。这个过程就是回流。

**重绘不一定会导致回流，回流一定会导致重绘**

### 减少 DOM 操作

**使用 JS 去给 DOM 分压 --- DocumentFragment 对象**

> DocumentFragment 接口表示一个没有父级文件的最小文档对象。它被当做一个轻量的 Document 使用，用于存储已排好版的或尚未打理好格式的 XML 。因为 DocumentFragment 不是真实 DOM 树的一部分，它的变化不会引起 DOM 树的重新渲染的操作（reflow），且不会导致性能等问题。

```JS
let container = document.getElementById('container')
// 创建一个DOM Fragment对象作为容器
let content = document.createDocumentFragment()
for(let count=0;count<10000;count++){
  // span此时可以通过DOM API去创建
  let oSpan = document.createElement("span")
  oSpan.innerHTML = '我是一个小测试'
  // 像操作真实DOM一样操作DOM Fragment对象
  content.appendChild(oSpan)
}
// 内容处理好了,最后再触发真实DOM的更改
container.appendChild(content)...
```

DOM Fragment 作为经典的性能优化手段大受欢迎，这一点在 jQuery、Vue 等优秀前端框架的源码中均有体现。