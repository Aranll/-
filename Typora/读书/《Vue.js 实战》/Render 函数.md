### 什么是 Virtual Dom

Virtual Dom 并不是真正意义上的 DOM，而是一个轻量级的 JavaScript 对象，在状态发生变化时，Virtual Dom 会进行 Diff 运算，来更新只需要被替换的 DOM，而不是全部重绘。

#### 优势

与 DOM 操作相比，Virtual DOM 是基于 JavaScript 计算的，所以开销会小很多。

#### VNode 种类

- TextVNode  文本节点

- ElementVNode  普通元素节点
- ComponentVNode 组件节点
- EmptyVNode  没有内容的注释节点
- CloneVNode  克隆节点，可以是以上任意类型的界定啊，唯一的区别在于 isClone 属性为 true









