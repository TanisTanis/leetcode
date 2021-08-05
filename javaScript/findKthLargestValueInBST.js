// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findKthLargestValueInBst(tree, k) {
  //input is the root node

  //array of values
  let values = [];

  //recursive function that oushes values into array
  function treeTraversal(node) {
    values.push(node.value);

    if (node.left) {
      treeTraversal(node.left);
    }
    if (node.right) {
      treeTraversal(node.right);
    }
  }
  treeTraversal(tree);

  //sort value array
  values.sort((a, b) => a - b);

  //return valuearray[last - k];
  return values[values.length - k];

  //output is integer, kth largest value
}
