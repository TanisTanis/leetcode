class AllocateIds {
  constructor(maxId) {
    this.maxId = maxId;
    this.allocated = new Set();
    this.queue = [];
  }

  allocate() {
    if (this.queue.length === 0) {
      return -1;
    } else {
      let newId = this.queue.shift();
      this.allocated.add(newId);
      return newId;
    }
  }

  release(id) {
    if (!this.allocated.has(id) || id < 0 || id > this.maxId) {
      return;
    }
    this.allocated.delete(id);
    this.queue.push(id);
  }

  check(id) {
    if (!this.allocated.has(id) || id < 0 || id > this.maxId) {
      return false;
    } else if (this.allocated.has(id)) {
      return true;
    }
  }
}

let class1 = new AllocateIds();
console.log(class1.queue);
