import java.util.ArrayList;

public class FindKthLargestValueInBST {
  static class BST {
    public int value;
    public BST left = null;
    public BST right = null;

    public BST(int value) {
      this.value = value;
    }
  }

  public int findKthLargestValueInBst(BST tree, int k) {
    ArrayList<Integer> values = inOrderTraversal(tree, new ArrayList<Integer>());
    int index = values.size() - k;
    return values.get(index);
  }

  public ArrayList<Integer> inOrderTraversal(BST tree, ArrayList<Integer> values) {
    if (tree.left != null) {
      inOrderTraversal(tree.left, values);
    }
    values.add(tree.value);

    if (tree.right != null) {
      inOrderTraversal(tree.right, values);
    }
    return values;
  }
}
