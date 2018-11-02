## 原理

CSS sprite（精灵图）是一项 CSS 图像合并技术，将页面的小图片或小图标合并成一张图片，然后利用CSS的背景定位来显示需要显示的图片部分，来达到减少 HTTP 请求的目的。

## 使用 - 实现方式

### CSS icon



### SVG

### Icon Font 方式：

#### 原理 

当使用浏览器打开页面时，浏览器会读取 HTML 文件进行解析渲染。当读到文字时会将文字转换成对应的 unicode码，再根据 HTML 里设置的 font-family ( 如果没设置则使用浏览器默认设置 ) 去查找电脑里（如果有自定义字体@font-face，则加载对应字体文件 ）对应字体的字体文件。找到文件后根据 unicode 码去查找绘制文字外形，找到后绘制到页面上。

### 操作步骤

把字体做成图标

1. 制作字体文件
2. 声明 font-family
   1. 使用本地
   2. 使用第三方连接

3. 使用 font-family
   1. 使用 HTML 实体
   2. 使用 CSS 

### 代码

```html
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />  

	<span class="f-icon f-icon-1"></span>
    <span class="f-icon f-icon-2"></span>
    <span class="f-icon f-icon-3"></span>
```



```css
@font-face {
    font-family: 'iconfont';
    /* project id 883129 */
    src: url('https://at.alicdn.com/t/font_883129_6f68qxr5td.eot');
    src: url('https://at.alicdn.com/t/font_883129_6f68qxr5td.eot?#iefix') format('embedded-opentype'),
        url('https://at.alicdn.com/t/font_883129_6f68qxr5td.woff') format('woff'),
        url('https://at.alicdn.com/t/font_883129_6f68qxr5td.ttf') format('truetype'),
        url('https://at.alicdn.com/t/font_883129_6f68qxr5td.svg#iconfont') format('svg');
}

.f-icon {
    font-family: 'iconfont';
}

.f-icon-1::before {
    content: "\e60b";
    font-size: 100px;
}
```



### 预览地址

[font-icon](https://aranll.github.io/-/%E4%BB%BB%E5%8A%A1/%E4%BB%BB%E5%8A%A11-8/%E4%BB%BB%E5%8A%A15-8/%E4%BB%BB%E5%8A%A18/font-size.html)

