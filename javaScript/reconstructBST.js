class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function reconstructBst(preOrderTraversalValues) {
  if (preOrderTraversalValues.length === 0) {
    return null;
  }

  const currentVal = preOrderTraversalValues[0];
  let rightSubtreeIndex = preOrderTraversalValues.length;

  for (let i = 1; i < preOrderTraversalValues.length; i++) {
    const val = preOrderTraversalValues[i];
    if (val >= currentVal) {
      rightSubtreeIndex = i;
      break;
    }
  }

  let leftTree = reconstructBst(
    preOrderTraversalValues.slice(1, rightSubtreeIndex)
  );
  let rightTree = reconstructBst(
    preOrderTraversalValues.slice(rightSubtreeIndex)
  );
  return new BST(currentVal, leftTree, rightTree);
}
