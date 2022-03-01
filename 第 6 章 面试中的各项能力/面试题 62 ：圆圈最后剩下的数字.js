/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.count = 0
        this.head = null
    }
    getElementAt(index) {
        if (index >= 0 && index < this.count) {
            let node = this.head
            for (let i = 0; i < index && node; i++) {
                node = node.next
            }
            return node
        }
        return null
    }
    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element)
            let current = this.head
            if (index === 0) {
                if (!this.head) {
                    this.head = node
                    node.next = this.head
                } else {
                    node.next = current
                    current = this.getElementAt(this.count - 1)
                    this.head = node
                    current.next = this.head
                }
            } else {
                const previous = this.getElementAt(index - 1)
                node.next = previous.next
                previous.next = node
            }
            this.count++
            return true
        }
        return false
    }
    remove(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head
            if (index === 0) {
                if (this.count === 1)
                    this.head = null
                else {
                    const removed = this.head
                    current = this.getElementAt(this.count - 1)
                    this.head = this.head.next
                    current.next = this.head
                    current = removed
                }
            } else {
                const previous = this.getElementAt(index - 1)
                current = previous.next
                previous.next = current.next
            }
            this.count--
            return current.element
        }
        return null
    }

}

var lastRemaining = function (n, m) {
    if (n < 1 || m < 1) return -1
    const numbers = new LinkedList()
    for (let i = 0; i < n; i++)
        numbers.insert(i, numbers.count)
    let current = 0
    while (numbers.count > 1) {
        for (let i = 1; i < m; i++) {
            current++
            if (current >= numbers.count)
                current = 0
        }
        numbers.remove(current)
        if (current === numbers.count) current = 0
    }
    return numbers.head.element
};