/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.m_data = []
    this.m_min = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    const {
        m_data,
        m_min
    } = this
    m_data.push(x)
    if (m_min.length && x > m_min[m_min.length - 1])
        m_min.push(m_min[m_min.length - 1])
    else m_min.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.m_min.pop()
    return this.m_data.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.m_data[this.m_data.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
    return this.m_min[this.m_min.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */