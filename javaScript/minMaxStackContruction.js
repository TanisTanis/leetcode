class MinMaxStack {
  constructor() {
    this.stack = [];
    this.min = [];
    this.max = [];
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  pop() {
    let poppedVal = this.stack.pop();
    let currentMin = this.min[this.min.length - 1];
    let currentMax = this.max[this.max.length - 1];

    if (currentMin === poppedVal) {
      this.min.pop();
    }
    if (currentMax === poppedVal) {
      this.max.pop();
    }
    return poppedVal;
  }

  push(number) {
    this.stack.push(number);

    if (this.min.length === 0) {
      this.min.push(number);
    } else {
      let currentMin = this.min[this.min.length - 1];
      if (number <= currentMin) {
        this.min.push(number);
      }
    }

    if (this.max.length === 0) {
      this.max.push(number);
    } else {
      let currentMax = this.max[this.max.length - 1];
      if (number >= currentMax) {
        this.max.push(number);
      }
    }
  }

  getMin() {
    return this.min[this.min.length - 1];
  }

  getMax() {
    return this.max[this.max.length - 1];
  }
}
