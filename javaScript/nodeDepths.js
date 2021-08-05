function nodeDepths(root) {
  let sum = 0;

  function binaryTraversal(node, depth) {
    sum += depth;

    if (node.left) {
      binaryTraversal(node.left, depth + 1);
    }
    if (node.right) {
      binaryTraversal(node.right, depth + 1);
    }
  }

  binaryTraversal(root, 0);

  return sum;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
