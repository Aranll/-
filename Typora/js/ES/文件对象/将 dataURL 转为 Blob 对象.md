### 描述

dataURL 是 `base64` 编码的数据格式，展示类型为字符串

`Blob` 对象表示一个不可变、原始数据的类文件对象。

### 基础知识

#### `Blob` 构造函数

```js
/**
 * @description 返回一个新创建的 Blob 对象，其内容由参数中给定的数组串联组成
 * @param { Array } blobParts 内容
 * @param { String } options 内容的 MIME 类型，如果类型未知，则为空
 * @return { Blob }
**/
Blob(blobParts[, options])
```

#### 实例

```js
var debug = {hello: "world"};
var blob = new Blob([JSON.stringify(debug, null, 2)],
  {type : 'application/json'});
```



### 转换方案

```js
const dataURLToBlob = (dataURL) => {
    const infoArray = dataURL.split(',')
    const mime = infoArray[0].match(/:(.*)(?=;)/)[1]
    const utf8String = window.atob(infoArray[1])
    let utf8Array = new Unit8Array(utf8String.length)
    
    utf8Array = utf8Array.map((item, index) => {
        return utf8String.charCodeAt(index)
    })
    
    return new Blob([utf8Array], { type: mime })
}
```

### 补充

```js
// Blob 对象转为 File 对象
const blobToFile(blob, fileName) {
    return new File([blob], fileName, {type: blob.type})
}
```

