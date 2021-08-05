class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    function dfs(node) {
      array.push(node.name);

      for (let i = 0; i < node.children.length; i++) {
        dfs(node.children[i]);
      }
    }

    dfs(this);

    return array;
  }
}
