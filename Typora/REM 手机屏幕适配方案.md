### REM 简介

`rem` 是屏幕适配中得到重用的长度单位。使用 `rem` 前端开发者可以很方便的在各种屏幕尺寸下，通过`等比缩放`的方式达到设计图要求的效果。

`rem` 的官方定义是『The font size of the root element.』，即以根节点的字体大小作为基准值进行长度计算。一般认为网页中的根节点是 `html` 元素，所以采用的方式也是通过设置 `html` 元素的 `font-size` 来做屏幕适配。

### 具体方案

首先获取屏幕的默认字体（defaultFontSize）大小，再根据设备屏幕宽度（device-width）和设计图参考设备宽度（默认1rem等于100px）算出当前设备屏幕宽度下 1rem 对应的 px 值。

**核心公式**：目标REM = 当前设备屏幕宽度 / 设计图参考设备宽度 * rem2px / defalutFontSize * 100 + '%'

**代码实现**：

```javaScript
/*
* @method
* @param {Number} designWidth 设计图参考设备宽度
* @param {Number} rem2px 初始化 1rem 对应的 px 值，一般为 100
* @return 没有返回值
* @desc 采用 rem 作为长度单位，再根据当前用户设备屏幕宽度动态设置 html 元素的 font-size 达到屏幕* 适配的目的
**/

const setFontSize(designWidth, rem2px) {
    // 获取当前设备的默认字体大小
    let defaultFontSize = 0;
    let div = document.creatElement('div');
    let head = document.getElementsByTagName('head')[0];
  
    head.appendChild(div);
    div.style.width = '1rem';
    div.style.display = 'none';
    defaultFontSize = parseFloat(window.getComputedStyle(div,null).getPropertyValue('width'));

    // 计算等比缩放后 html 的 font-size
    document.documentElement.style.fontSize = window.innerWidth / designWidth * rem2px / defaultFontSize * 100 + '%';
}
```

**实例:** 在 <head> 标签中可插入以下代码，当页面加载时完成 html 的 font-size 属性的设置

**提示：**由于重写了 window 的 onresize() 方法 。当设备横屏时会重新调用 setFontSize() 方法，此时 window.innerWidth 的值为设备屏幕高度，实现了横屏适配。之后会再提供一个媒体查询解决横屏适配的方案。

```javascript
let designWidth = 750, rem2px = 100

// 将函数的调用放到队列尾部，防止 JS 执行时，对应的 DOM 结构还没有被渲染出来，导致函数执行无效
setTimeout(function() {
    setFontSize(designWidth, rem2px);
}, 100);
// 当屏幕宽度改变时，调用 setFontSize() 方法
window.onresize = function() {
    setFontSize(designWidth, rem2px)
};
```

### 横屏解决方案（meida 方案）

| 名称 | 竖屏 | 横屏 |
| ---- | ---- | ---- |
| 流媒体 | portrait | landscape |
| link标签中 | media="all and (orientation:landscape)" | media="all and (orientation:portrait)" |


适配横屏。当竖屏时，采用设备屏幕的宽度作为计算值；当横屏时，采用设备屏幕的高度作为计算值

```javascript
let portrait = "@media screen and (min-width:" + window.innerWidth +"px){ html { font-size:"+ window.innerWidth / designWidth * rem2px / defaultFontSize * 100 +"%;}}";

let landscape = "@media screen and (min-width:" + window.innerHeight + "px){ html { font-size: "+ window.innerHeight / designWidth * rem2px / defaultFontSize * 100 +"px}}";
```

**完整代码：**

```javascript
/*
* @method
* @param {Number} designWidth 设计图参考设备宽度
* @param {Number} rem2px 初始化 1rem 对应的 px 值，一般为 100
* @return 没有返回值
* @desc 采用 rem 作为长度单位，再根据当前用户设备屏幕宽度动态设置 html 元素的 font-size 达到屏幕* 适配的目的
**/

const setFontSize(designWidth, rem2px) {
    // 获取当前设备的默认字体大小
    let defaultFontSize = 0;
    let div = document.creatElement('div');
    let head = document.getElementsByTagName('head')[0];
  
    head.appendChild(div);
    div.style.width = '1rem';
    div.style.display = 'none';
    defaultFontSize = parseFloat(window.getComputedStyle(div,null).getPropertyValue('width'));

    // 计算等比缩放后 html 的 font-size
    // document.documentElement.style.fontSize = window.innerWidth / designWidth * rem2px / defaultFontSize * 100 + '%';
    
    // 横屏解决方案
    let style = document.creatElement('style');
    let portrait = "@media screen and (min-width:" + window.innerWidth +"px){ html { font-size:"+ window.innerWidth / designWidth * rem2px / defaultFontSize * 100 +"%;}}";
	let landscape = "@media screen and (min-width:" + window.innerHeight + "px){ html { font-size: "+ window.innerHeight / designWidth * rem2px / defaultFontSize * 100 +"px}}";
    style.innerHTML = portrait + landscape;
}
```



