### flex

```css
.parent {
    display: flex;
}
```

直接子元素中的块级元素不再霸道的占据一行，并且高度自动等于父元素的高度。

### flex-direction

```css
.parent {
    display: flex;
    flex-direction: row; // [row(default), column, row-reverse, column-reverse]
}
```

### justify-content

```
.parent {
    display: flex;
    justify-content: center; // [center, flex-start(default), flex-end, space-between, space-around]
}
```

### align-items

```
.parent {
    display: flex;
    align-items: center; // [center, flex-start, flex-end, stretch(default), baseline]
}
```

### flex-wrap

 flex-items 超出 flex-container 时是否换行

```
.parent {
    display: flex;
    flex-wrap: wrap; // [nowrap(default), wrap, warp-reverse]
}
```

### flex-shrink

```
.flex-child {
    flex-shrink: 1; // [1(default), 正整数]，数字越大收缩越多
}
```

### flex-grow (the opposite of flex-shrink)

```
.flex-child {
    flex-grow: 1; // [正整数]，数字越大增大越多
}
```

### flex-basis

用于在 flex-shrink 或 flex-grow 之前初始化 flex item 的尺寸,单位是 px、em、% 等长度单位。

当 flex-item 的宽度大于 flex-basis 设定的值时，当 flex-item 的宽度持续增大，将会以 flex-grow 设定的值去作为增大速度。同理，减小时，使用 flex-shrink 设定的值作为缩小的速度。

```css
.flex-child-1 {
    flex-basis: 10em;
}
.flex-child-2 {
    flex-basis: 10px;
}
```

### flex shorthand

```css
.flex-child {
    flex-grow: 2;
    flex-shrink: 2;
    flex-basis: 10em;
}
=>
.flex-child {
    flex: 2 2 10em;
}
```

### order

这个属性告诉 CSS 我们的 flex-item 在 flex-container 中应该排在哪个位置，它的属性值是整数（负数，0，正数）数字越小排越前。

```css
.flex-child-1 {
    order: 2;
}

.flex-child-2 {
    order: 1;
}
```

### align-self

使用在 flex-item 上的属性，作用和 align-items 类似。是解决 float，clear 和 vertical-align 等 CSS 属性对 flex item 不起作用的技术方案。

```css
.flex-child {
    align-self: center; // [center, flex-start, flex-end, stretch, baseline]
}
```



