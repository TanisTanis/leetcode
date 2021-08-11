class ArrayOfProducts {
  public int[] arrayOfProducts(int[] array) {
    int[] results = new int[array.length];

    for (int i = 0; i < array.length; i++) {
      int product = 1;
      for (int j = 0; j < array.length; j++) {
        if (i == j) {
          continue;
        }
        product *= array[j];
      }
      results[i] = product;
    }
    return results;
  }
}