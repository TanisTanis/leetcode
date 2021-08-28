class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree) {
  return validationHelper(tree, -Infinity, Infinity);
}

function validationHelper(tree, min, max) {
  if (tree === null) return true;
  let val = tree.value;
  if (val < min || val >= max) {
    return false;
  }

  let left = validationHelper(tree.left, min, val);
  let right = validationHelper(tree.right, val, max);
  return left && right;
}
