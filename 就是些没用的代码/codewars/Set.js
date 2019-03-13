class Set {
    constructor() {
        this.items = {}
    }
    /**
     * @description 使用 hasOwnProperty 方法
     * @param {*} value 
     */
    has(value) {
        return this.items.hasOwnProperty(value)
    }
    add(value) {
        if (this.has(value)) {
            return false
        } else {
            this.items[value] = value
            return true
        }
    }
    remove(value) {
        if (!this.has(value)) {
            return false
        } else {
            delete this.items[value]
            return true
        }
    }
    clear() {
        this.items = {}
    }
    size() {
        let count = 0
        for (let key in this.items) {
            if (this.items.hasOwnProperty(key))
                ++count
        }
        return count
    }
    values() {
        let values = []

        for (let key in this.items) {
            if (this.items.hasOwnProperty(key)) {
                values.push(this.items[key])
            }
        }
        return values
    }
}