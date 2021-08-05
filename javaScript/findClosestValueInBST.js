function findClosestValueInBst(tree, target) {
  //difference
  let maxDifference = Infinity;
  let closestValue = null;

  //recursive function
  function treeTraversal(node) {
    let difference = Math.abs(target - node.value);
    if (difference < maxDifference) {
      maxDifference = difference;
      closestValue = node.value;
    }
    if (node.left) {
      treeTraversal(node.left);
    }
    if (node.right) {
      treeTraversal(node.right);
    }
  }
  treeTraversal(tree);

  //return difference
  return closestValue;
}
