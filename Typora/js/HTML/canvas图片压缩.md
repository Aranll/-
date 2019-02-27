### 描述

#### 使用 Canvas 元素来绘制图形，需要三步

1. 获取 canvas 对象

   ```
   var canvas = document.getElementById('canvas')
   ```

   

2. 获取上下文环境对象 context

   ```
   var context = canvas.getContext('2d')
   ```

   

3. 开始绘制图形

####  Canvas 元素

1. 在 HTML 属性中定义宽度和高度

#### Canvas 对象

canvas 对象属性

|  属性  |     说明      |
| :----: | :-----------: |
| width  | Canvas 的宽度 |
| height | Canvas 的高度 |

canvas 对象方法

|        属性        |                说明                |
| :----------------: | :--------------------------------: |
| getContext( '2d' ) |   获取 Canvas 2D 上下文环境对象    |
|    toDataURL()     | 获取 canvas 对象产生的位图的字符串 |

### 图片操作

我们可以将图片导入到 Canvas 中进行 平铺、切割、像素处理等各种操作

#### 绘制图片

我们使用 `drawImage()` 方法绘制图片

| 调用方式                                     |
| :------------------------------------------- |
| drawImage(image, dx, dy)                     |
| drawImage(image, dx, dy, dw, dh)             |
| drawImage(image, sx, sy, sw, dx, dy, dw, dh) |

| 参数/名称 | 描述                         |
| :-------: | :--------------------------- |
|     d     | destination（目标图片）      |
|     s     | source（源图片）             |
|   image   | 页面中的图片                 |
|    sx     | 源图片被截取部分的起点横坐标 |
|    sy     | 源图片被截取部分的起点纵坐标 |
|    sw     | 源图片被截取部分的宽度       |
|    sh     | 源图片被截取部分的高度       |
|    dx     | 图片左上角的横坐标           |
|    dy     | 图片左上角的纵坐标           |
|    dw     | 图片的宽度                   |
|    dh     | 图片的高度                   |

实例

```
context.drawImage(image, 0, 0, 200, 200)
```



#### 压缩图片

使用 `HTMLCanvasElement.toDataURL()` 方法返回一个包含图片展示的 data URL 

**语法**

```js
canvas.toDataURL(type, encoderOptions)
```

**参数**

| 名称           | 描述                                                         |
| -------------- | ------------------------------------------------------------ |
| type           | 图片格式，默认为 image/png                                   |
| encoderOpeions | 指定图片格式为 image/jpeg 或 image/webp 的情况下，可以从 0 到 1 的区间内选中图片质量。如果超出取致范围，将会使用默认值 0.92.其它参数会被忽略 |

### 实例

```js

```

