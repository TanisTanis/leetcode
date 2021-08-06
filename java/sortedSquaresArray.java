import java.util.*;

class SortedSquaredArray {

  public int[] sortedSquaredArray(int[] array) {
    int[] squares = new int[array.length];
    for (int i = 0; i < array.length; i++) {
      int val = array[i];
      squares[i] = val * val;
    }
    Arrays.sort(squares);
    return squares;
  }
}