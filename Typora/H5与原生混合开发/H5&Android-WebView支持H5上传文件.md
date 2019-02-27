### FormData

作用：用以将数据编译成键值对

### Blob

描述：表示一个不可变、原始数据的类文件对象

### File

文件（**File**）接口提供有关文件的信息，并允许网页中的 JavaScript 访问其内容。

### FileReader

#### 描述

FileReader 对象允许Web应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，使用 File 或 Blob 对象指定要读取的文件或数据。

#### 方法

FileReader.readAsDataURL(blob)

读取指定的 `Blob` 或 `File` 对象。读取操作完成后（触发 `loadend` 事件），`result` 属性将包含一个 `ArrayBuffer` 对象表示所读取的文件的数据 

### window.atob && window.btoa

atob: 对用 base-64 编码过的字符串进行解码

btoa: 对用 base-64 编码过的字符串进行编码

### Generator 函数的含义与用法

ES6 的实现，用于解决异步编程的问题，最大特点是可以交出函数的执行权（即暂停执行）

###

### 参考文献

[移动端H5实现图片上传](https://segmentfault.com/a/1190000010034177)

