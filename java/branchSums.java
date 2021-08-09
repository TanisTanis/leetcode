import java.util.*;

class BranchSums {
  // This is the class of the input root. Do not edit it.
  public static class BinaryTree {
    int value;
    BinaryTree left;
    BinaryTree right;

    BinaryTree(int value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  public static List<Integer> branchSums(BinaryTree root) {
    return searchBranch(root, 0, new ArrayList<Integer>());
  }

  public static ArrayList<Integer> searchBranch(BinaryTree node, int sum, ArrayList<Integer> sums) {
    sum += node.value;

    if (node.left != null) {
      searchBranch(node.left, sum, sums);
    }
    if (node.right != null) {
      searchBranch(node.right, sum, sums);
    }
    if (node.left == null && node.right == null) {
      sums.add(sum);
    }

    return sums;
  }
}