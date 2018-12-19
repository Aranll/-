### 描述

HMR 全称 Hot Module Replacement，即模块热更新。

当代码变更时，局部替换掉部分模块代码并且使其生效，显示出代码变更后的效果。

HMR 既避免了频繁的手动刷新页面，也减少了页面刷新时的等待，可以极大地提高前端页面开发效率。

### 使用

```
{
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}
```

