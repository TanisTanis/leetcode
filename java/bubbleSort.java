class BubbleSort {
  public static int[] bubbleSort(int[] array) {

    boolean noSwaps = false;

    while (!noSwaps) {
      boolean swaps = false;
      for (int i = 0; i < array.length - 1; i++) {
        int cur = array[i];
        int next = array[i + 1];

        if (cur > next) {
          int temp = array[i];
          array[i] = next;
          array[i + 1] = cur;
          swaps = true;
        }
      }
      if (swaps == false) {
        noSwaps = true;
      }
    }

    return array;
  }
}