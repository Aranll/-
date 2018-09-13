-am中的a是什么意思
```javaScript
git commit -m ""
//相当于git add -A && git commit -m ""
git commit -am ""  
```

这两个add命令有相同的作用
```javaScript
git add -A
git add . 
```

可以指向指定版本号进行项目回滚
```javaScript
git reset --harder //取消暂存
```


如何使用github page 演示项目HTML
```javaScript
setting->github pages->Source->master branch-> Save
```
#### Why Git 原理
版本控制是一种记录一个或若干个文件内容变化，以便将来查阅特定版本修订情况的系统
优势  通过对比文件变更时生成的哈希值得知文件是否有变化
- 速度
- 简单的设计
- 允许上千个并行分支
- 分布式
```javaSciprt
    
```