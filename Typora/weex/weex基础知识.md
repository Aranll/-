### 通用事件

- longpress(长按事件):如果一个组件被绑定了 longpress 事件，那么当用户长按这个组件时，该事件将会被触发。
- Appear（屏幕内事件）：如果一个位于某个可滚动区域内的组件被绑定了 `appear` 事件，那么当这个组件的状态变为在屏幕上可见时，该事件将被触发。
- Disappear（屏幕外事件）:如果一个位于某个可滚动区域内的组件被绑定了 `disappear` 事件，那么当这个组件被滑出屏幕变为不可见状态时，该事件将被触发。

## Weex 环境变量

> 在 Vue 中每个 Weex 页面的 JS 上下文中都有一个相互独立的 `weex` 变量，它可以像全局变量一样使用，不过它在不同页面中是隔离而且*只读*的。

### 属性和方法

```typescript
declare type Weex = {
  config: WeexConfigAPI;
  document: WeexDocument;
  requireModule: (name: string) => Object | void;
  supports: (condition: string) => boolean | void;
}
```

#### `config`

该变量包含了当前 Weex 页面的所有环境信息

```typescript
declare type WeexConfigAPI = {
  bundleUrl: string;
  bundleType?: string;
  env: WeexEnvironment;
}
```

#### `document`

`weex.document` 是当前页面的文档模型对象，可以用来创建和操作 DOM 树中元素。

**不建议在开发页面时使用。**

#### `requireModule`

对于那些不依赖 UI 交互的原生功能，Weex 将其封装成**模块**，这是一种通过 javascript 调用原生能力的方法。

```typescript
weex.requireModule(name: string): Object | void;
```

**返回值：**

- 如果模块已经注册了，返回一个 `Proxy` 对象（如果环境不支持 `Proxy` 则返回一个普通对象），可以使用这个对象调用客户端注册的方法。
- 如果模块未注册，返回 `undefined`。

#### `supports`

- Weex 的组件和模块都是可以注册和配置的

- 可以使用 `weex.supports` 接口在运行期检测某个功能在当前环境中是否可用

```typescript
weex.supports(condition: string): boolean | void;
```

**参数：**

- 特定格式的字符串：`@{type}/{name}`。

`type` 必须是 `"component"` 和 `"module"` 之一。`name` 可以是标签名、模块名，也可以指定模块中的某个方法名（和模块名用 `.` 隔开）。

**返回值：**

- 支持该特性，则返回 `true`。
- 不支持该特性，则返回 `false`。
- 参数格式错误或无法确定是否支持，则返回 `null`。

#### `isRegisteredModule`

检测某个特定的模块或者接口是否可用。

```typescript
weex.isRegisteredModule(moduleName: string, methodName: string): boolean
```

这个接口只能用于检测特定模块和方法的兼容性，不支持检测组件。

```js
weex.isRegisteredModule('stream') // true
weex.isRegisteredModule('stream', 'fetch') // true
weex.isRegisteredModule('whatever', '- unknown -') // false
weex.isRegisteredModule('div') // false, not support components
```

#### `isRegisteredComponent`

检测某个特定的组件是否可用。

```typescript
weex.isRegisteredComponent(componentName: string): boolean
```

这个接口只能用于检测组件的兼容性，不支持检测模块。

```js
weex.isRegisteredComponent('div') // true
weex.isRegisteredComponent('- unknown -') // false
weex.isRegisteredComponent('navigator') // false, not support modules
```

### JS 服务

JSService 和 Weex 实例在 JS Runtime 中并行运行。Weex 实例的生命周期可调用 JSService 生命周期。目前提供创建、刷新、销毁生命周期。

**重要提醒: JSService 使用不当会导致内存增高或全局污染**

