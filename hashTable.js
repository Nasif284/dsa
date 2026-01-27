class HashTable {
    constructor(size = 20) {
        this.table = new Array(size)
    }
    hash(key) {
        let total = 0
        for (let i = 0; i < key.length; i++){
            total += key.charCodeAt(i)
        }
        return total % this.table.length
    }
    set(key, value) {
        let index = this.hash(key)
        if (!this.table[index]) {
            this.table[index] = []
        }
        for (let pair of this.table[index]) {
            if (pair[0] == key) {
                pair[1] = value
                return
            }
        }
        this.table[index].push([key,value])
    }
    get(key) {
        let index = this.hash(key)
        let table = this.table[index]
        if (!table) return undefined
        for (let pair of table) {
            if (pair[0] == key) {
                return pair[1]
            }
        }
        return undefined
    }
    
    
    delete(key) {
        let index = this.hash(key)
        let table = this.table[index]
        if (!table) return false
        for (let i = 0; i < table.length;i++) {
            if (table[i][0] == key) {
                this.table.splice(i, 1)
                return true
          }
        }  
        return false
    }
}

let h = new HashTable(20)
h.set("name", "nasif")
console.log(h.get("name"))
h.delete("name");
console.log(h.get("name"));

class LinearProbingHashTable {
    constructor(size) {
        this.table = new Array(size).fill(null)
        this.count = 0
        this.size = size
    }
    hash(key) {
        let total = 0
        for (let i = 0; i < key.length; i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }
    set(key, value) {
        let index = this.hash(key)
        if (this.count === this.size) {
            return "Table is full"
        }
        while (this.table[index] !== null && this.table[index]?.key !== key) {
            index  = (index + 1) % this.size
        }
        if (this.table[index] == null) this.count++
        this.table[index] = { key, value }
    }
    get(key) {
        let index = this.hash(key)
        let start = index
        while (this.table[index] !== null) {
            if (this.table[index].key == key) {
                return this.table[index].value
            }
            index = (index + 1) % this.size
            if (index == start) {
                break
            }
        }
        return undefined
    }
}