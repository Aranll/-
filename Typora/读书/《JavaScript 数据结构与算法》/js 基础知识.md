### 操作符

1. typeof （检查类型）
2. delete （删除对象中指定的属性）

### 条件语句

1. switch case break

### 循环

1. do while

### 模板字面量

模板字面量用一对 ` 包裹。要插入变量的值，只要把变量放在 ${} 里就可以了。实例如下 

```
let book = { name: 'love and peace' }
console.log(`这本书的书名是${book.name}`)
```

### 类

```js
class Book() {
    constructor (title, pages, isbn) {
        this.title = thitle;
        this.pages = pages;
        this.isbn = isbn;
    }
    printIsbn() {
        console.log(this.isbn)
    }
}
```

### 继承

```
class ITBook extends Book {
    constructor (title, pages, isbn, technology) {
        super(title, pages, isbn);
        this.technology = technology
    }
    printTechnology() {
        console.log(this.technology)
    }
}
```

### ES6 和数组的新功能

| 方法       | 描述 |
| ---------- | ---- |
| @@iterator |      |
| copyWithin |      |
| entries    |      |
| includes   |      |
| find       |      |
| findIndex  |      |
| fill       |      |
| from       |      |
| keys       |      |
| of         |      |
| values     |      |

#### 实例

创建数组并初始化值 --- Array.fill(value)

```js
let ones = Array(6).fill(1)
[1,1,1,1,1,1]
```

copyWithin 方法复制数组中的一系列元素到统一数组指定的起始位置

```
let arr = [1,2,3,4,5,6]
arr.copyWithin(0,3,5)
[4,5,3,4,5,6]
```

### 排序

```js
Array.reverse() // 反序输出
Array.sort() // 正序输出 或 反序输出
```

```js
// Array.sort() + String.localeCompare()
let arr = ['abc', 'abd', 'abb']
arr.sort(function(a, b) => {
    return a.localeCompare(b) // 字符串 a 和 b 做比较，如果 a > b 则返回 1；a = b 则返回 0； a < b 则返回 -1
})
['abb', 'abc', 'abd']
```

### 搜索

| 方法                             | 描述                                                |
| -------------------------------- | --------------------------------------------------- |
| Array.indexOf(element)           | 返回第一个匹配到的元素的下标，匹配不到，则返回 -1   |
| Array.lastIndexOf(element)       | 返回最后一个匹配到的元素的下标，匹配不到，则返回 -1 |
| Array.find(callback)             | 返回匹配到的第一个元素，没有则返回 undefined        |
| Array.findIndex(callback)        | 返回匹配到的第一个元素的下标，没有则返回 -1         |
| Array.includes(element[, index]) | 匹配到指定元素返回 true，反之，返回 false           |

### 输出数组为字符串

| 方法             | 描述                             |
| ---------------- | -------------------------------- |
| Array.toString() | 将数组里所有元素输出为一个字符串 |
| Array.join()     | 传入一个分隔符将元素隔开         |

