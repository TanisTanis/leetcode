class FindClosestValueInBst {

  public static int findClosestValueInBst(BST tree, int target) {
    return searchTree(tree, target, tree.value);
  }

  public static int searchTree(BST tree, int target, int closestVal) {
    int currentDifference = Math.abs(closestVal - target);
    int curVal = tree.value;
    int newDifference = Math.abs(curVal - target);

    if (newDifference < currentDifference) {
      closestVal = curVal;
    }

    if (curVal > target && tree.left != null) {
      closestVal = searchTree(tree.left, target, closestVal);
    } else if (curVal < target && tree.right != null) {
      closestVal = searchTree(tree.right, target, closestVal);
    }

    return closestVal;

  }

  static class BST {
    public int value;
    public BST left;
    public BST right;

    public BST(int value) {
      this.value = value;
    }
  }
}