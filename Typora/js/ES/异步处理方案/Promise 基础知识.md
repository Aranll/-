### 响应多个 Promise

#### Promise.all() 方法

Promise.all() 方法只接受一个参数并返回一个 Promise，该参数是一个含有多个受监控 Promise 的可迭代对象，只有当可迭代对象所有 Promise 都被解决后返回的 Promise 才会被解决，只有当可迭代对象中所有 Promise 都被完成后返回的 Promise 才会被完成。

```
let p1 = new Promise((resolve, reject) => {
    resolve(1)
})
let p2 = new Promise((resolve, reject) => {
    resolve(2)
})
let p3 = new Promise((resolve, reject) => {
    resolve(3)
})
let p4 = Promise.all([p1, p2, p3])

p4.then(([d1, d2, d3]) => {
    console.log([d1, d2, d3]) // 1,2,3
})
```

#### Promise.race() 方法	

Promise.race() 方法监听多个 Promise 的方法，接受含多个受监视 Promise 的可迭代对象作为唯一参数，并返回一个 Promise，但只要有一个 Promise 被解决返回的 Promise 就被解决，无须等到所有 Promise 都被完成。一旦数组中的某个 Promise 被完成，Promise.race() 方法就会返回一个特定的 Promise。