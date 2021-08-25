class InsertionSort {
  public static int[] insertionSort(int[] array) {

    for (int i = 0; i < array.length; i++) {
      int j = i;
      while (j > 0 && array[j] < array[j - 1]) {
        int temp = array[j - 1];
        array[j - 1] = array[j];
        array[j] = temp;
        j -= 1;
      }
    }

    return array;
  }
}