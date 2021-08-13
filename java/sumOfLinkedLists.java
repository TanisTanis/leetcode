import java.util.*;

class Program {
  // This is an input class. Do not edit.
  public static class LinkedList {
    public int value;
    public LinkedList next;

    public LinkedList(int value) {
      this.value = value;
      this.next = null;
    }
  }

  public LinkedList sumOfLinkedLists(LinkedList linkedListOne, LinkedList linkedListTwo) {
    int l1 = Integer.parseInt(new StringBuffer(getSum(linkedListOne, "")).reverse().toString());
		int l2 = Integer.parseInt(new StringBuffer(getSum(linkedListTwo, "")).reverse().toString());
		String sum = String.valueOf(l1 + l2);

		LinkedList result = new LinkedList(Character.getNumericValue(sum.charAt(sum.length() - 1)));
		LinkedList currentNode = result;

		for (int i = sum.length() - 2; i >= 0; i--) {
			LinkedList newNode = new LinkedList(Character.getNumericValue(sum.charAt(i)));
			currentNode.next = newNode;
			currentNode = newNode;
		}

		return result;
  }

	public static String getSum(LinkedList node, String number) {
		number += node.value;
		if (node.next == null) {
			return number;
		} else {
			return getSum(node.next, number);
		}
	}
}