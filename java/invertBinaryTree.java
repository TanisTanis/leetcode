public class InvertBinaryTree {
  public static void invertBinaryTree(BinaryTree tree) {
    BinaryTree left = tree.left;
    BinaryTree right = tree.right;

    tree.left = right;
    tree.right = left;

    if (tree.left != null) {
      invertBinaryTree(tree.left);
    }
    if (tree.right != null) {
      invertBinaryTree(tree.right);
    }
  }

  static class BinaryTree {
    public int value;
    public BinaryTree left;
    public BinaryTree right;

    public BinaryTree(int value) {
      this.value = value;
    }
  }
}
