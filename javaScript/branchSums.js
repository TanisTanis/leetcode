class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  let sums = [];

  function binarySum(node, sum) {
    //if left, call binarysum on left
    if (node.left) {
      binarySum(node.left, sum + node.value);
    }

    //if right, call binarysum on right
    if (node.right) {
      binarySum(node.right, sum + node.value);
    }

    //if neither, push sum to sums array
    if (!node.left && !node.right) {
      sums.push(sum + node.value);
    }
  }
  binarySum(root, 0);

  return sums;
}
