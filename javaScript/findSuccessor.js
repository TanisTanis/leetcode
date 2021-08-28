class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

function findSuccessor(tree, node) {
  let values = [];
  let nodes = [];

  function inOrderTraverse(currentNode) {
    if (currentNode !== null) {
      inOrderTraverse(currentNode.left);
      values.push(currentNode.value);
      nodes.push(currentNode);
      inOrderTraverse(currentNode.right);
    }
  }

  inOrderTraverse(tree);
  const index = values.indexOf(node.value) + 1;
  return nodes[index];
}
