class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.length = 0
        this.head = null
    }
    append(element) {
        let node = new Node(element)
        let current = null

        if (this.length === 0) {
            this.head = node
        } else {
            current = head

            while (current.next) {
                current = current.next
            }

            current.next = node
        }
        this.length++
    }
    insert(position, element) {
        if (position < 0 || position > this.length) {
            return false
        }

        let index = 0,
            previous = null,
            current = this.head,
            node = new Node(element)

        if (position === 0) {
            node.next = current
            this.head = node
        } else {
            while (index++ < position) {
                previous = current
                current = current.next
            }
            node.next = current
            previous.next = node
        }
        this.length++

        return true
    }
    removeAt(position) {
        if (position < 0 || position > this.length) {
            return null
        }

        let index = 0,
            previous = null,
            current = this.head

        if (position === 0) {
            this.head = current.next
        } else {
            while (index++ < position) {
                previous = current
                current = current.next
            }
            previous.next = current.next
        }
        this.length--
        return current.element
    }
    remove(element) {
        let index = this.indexOf(element)
        return this.removeAt(index)
    }
    indexOf(element) {
        let index = 0,
            current = this.head

        while (current) {
            if (element === current.element) {
                return index
            }
            index++
            current = current.next
        }

        return -1
    }
    isEmpty() {
        return this.length === 0
    }
    size() {
        return this.length
    }
    getHead() {
        return head
    }
    toString() {
        let string = '',
            current = this.head

        while (current) {
            string += current.element + (current.next ? ',' : '')
            current = current.next
        }
        return string
    }
}