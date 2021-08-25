class SelectionSort {
  public static int[] selectionSort(int[] array) {

    int startIndex = 0;
    boolean sorted = false;

    while (!sorted) {

      int smallestVal = array[startIndex];
      int swapIndex = startIndex;

      for (int i = startIndex; i < array.length; i++) {
        int val = array[i];
        if (val < smallestVal) {
          smallestVal = val;
          swapIndex = i;
        }
      }

      int temp = array[swapIndex];
      array[swapIndex] = array[startIndex];
      array[startIndex] = temp;
      startIndex++;

      if (startIndex >= array.length) {
        sorted = true;
      }
    }

    return array;
  }
}
