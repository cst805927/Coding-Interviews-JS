var CQueue = function () {
    this.stack1 = []
    this.stack2 = []
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
    this.stack1.push(value)

};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
    const stack1 = this.stack1
    const stack2 = this.stack2
    if (!stack2.length) {
        while (stack1.length > 0) {
            stack2.push(stack1.pop())
        }
    }
    if (!stack2.length) return -1
    return stack2.pop()
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */