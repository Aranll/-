// class Queue {
//     constructor() {
//         this.items = []
//     }
//     enqueue(value) {
//         this.items.push(value)
//     }
//     dequeue() {
//         return this.items.shift()
//     }
//     front() {
//         return this.items[0]
//     }
//     isEmpty() {
//         return this.items.length === 0
//     }
//     size() {
//         return this.items.length
//     }
//     print() {
//         console.log(this.items.toString())
//     }
// }

/**
 * @description 使用 WeakMap 对象创建类的私有属性 
 */
const Queue = (function() {
    const items = new WeakMap()

    class Queue {
        constructor() {
            items.set(this, [])
        }
        enqueue(element) {
            items.get(this).push(element)
        }
        dequeue() {
            return items.get(this).shift()
        }
        front() {
            return items.get(this)[0]
        }
        isEmpty() {
            return items.get(this).length === 0
        }
        size() {
            return items.get(this).length
        }
        print() {
            console.log(items.get(this).toString())
        }
    }

    return Queue
})()

/**
 * @description 循环队列 --- 击鼓传花
 */
const hotPotato = (nameList, num) => {
    if (nameList.length === 0 || num < 0) {
        return false
    }
    let eliminated = ''
    let queue = new Queue()

    nameList.forEach(i => {
        queue.enqueue(i)
    })
    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue())
        }
        eliminated = queue.dequeue()
        console.log('eliminated: ' + eliminated)
    }

    return queue.dequeue()
}

let names = ['Jogn', 'Jack', 'Boo', 'Aran']