import java.util.*;

class NodeDepths {

  public static int nodeDepths(BinaryTree root) {
    ArrayList<Integer> depths = searchTree(root, 0, new ArrayList<Integer>());

    int depthSum = 0;

    for (int i = 0; i < depths.size(); i++) {
      depthSum += depths.get(i);
    }

    return depthSum;
  }

  public static ArrayList<Integer> searchTree(BinaryTree node, int depth, ArrayList<Integer> depths) {

    depths.add(depth);

    if (node.left != null) {
      searchTree(node.left, depth + 1, depths);
    }
    if (node.right != null) {
      searchTree(node.right, depth + 1, depths);
    }

    return depths;

  }

  static class BinaryTree {
    int value;
    BinaryTree left;
    BinaryTree right;

    public BinaryTree(int value) {
      this.value = value;
      left = null;
      right = null;
    }
  }
}
