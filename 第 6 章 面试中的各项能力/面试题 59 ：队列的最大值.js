var MaxQueue = function () {
    this.data = []
    this.maximums = []
    this.currentIndex = 0
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
    if (!this.maximums.length) return -1
    return this.maximums[0].number
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
    while (this.maximums.length && value >= this.maximums[this.maximums.length - 1].number)
        this.maximums.pop()
    const internalData = {
        number: value,
        index: this.currentIndex
    }
    this.data.push(internalData)
    this.maximums.push(internalData)
    this.currentIndex++
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
    if (!this.maximums.length) return -1
    if (this.maximums[0].index === this.data[0].index) this.maximums.shift()
    return this.data.shift().number
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */