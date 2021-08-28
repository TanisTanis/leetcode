class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array) {
    const queue = [this];
    while (queue.length > 0) {
      let current = queue.shift();
      array.push(current.name);
      for (let i = 0; i < current.children.length; i++) {
        queue.push(current.children[i]);
      }
    }
    return array;
  }
}
