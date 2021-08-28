function findClosestValueInBst(tree, target) {
  let closest = tree.value;
  let closestDiff = Math.abs(tree.value - target);

  function searchBST(node) {
    let val = node.value;
    let diff = Math.abs(val - target);

    if (diff < closestDiff) {
      closestDiff = diff;
      closest = val;
    }

    if (val < target) {
      if (node.right !== null) {
        searchBST(node.right);
      }
    } else if (val > target) {
      if (node.left !== null) {
        searchBST(node.left);
      }
    } else if (val === target) {
      closest = val;
      return;
    }
  }

  searchBST(tree);
  return closest;
}
