#### 使用 watch 绑定底部全选按钮。实现所有 input 标签被选中后，底部按钮自动更新为被选中，如果没有的话则更新为没有被选中

#### 在月账单对象中加入 count 属性用来记录子元素被选中的个数，如果 count 的值和 children 的个数相等，则被选中

```
<input :checked="item.count===item.children.length" @click="selectAllChildren(item)"/>
```



#### 通过 id 实现 icon 和 input 标签的绑定

```html
<input id="item.id"> <i class="img-ico .choose" @click="selectInput(item.id)">
```

```javascript
function selectInput(id) {
    document.getElementById(id).click()
}
```

#### 通过 css 伪类属性选中 icon 

```css
.input:checked + .choose {
    background-img:url()
}

```



#### 通过获取DOM控制 孩子节点显隐



