### 流体特性

当 top right bottom left 同时设置之后，position 属性值为 absolute 的元素具有流体特性。（水平和垂直方向都具备）

#### 实例：

利用绝对定位元素的流体特性和 margin：auto 的自动分配特性实现居中

```css
.item {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 200px;
  height: 200px;
  background-color: yellow;
}

.content {
  position: relative;
  height: 400px;
  background-color: pink;
}
```

