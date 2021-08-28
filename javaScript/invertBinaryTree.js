function invertBinaryTree(tree) {
  function invertNode(node) {
    let left = node.left;
    let right = node.right;

    node.left = right;
    node.right = left;

    if (node.left) {
      invertNode(node.left);
    }
    if (node.right) {
      invertNode(node.right);
    }
  }

  invertNode(tree);
  return tree;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
