import java.util.*;

class Program {
  public static int[] twoNumberSum(int[] array, int targetSum) {
    Arrays.sort(array);
    int first = 0;
    int second = array.length - 1;

    while (first < second) {
      int sum = array[first] + array[second];
      if (sum > targetSum) {
        second--;
      } else if (sum < targetSum) {
        first++;
      } else {
        int[] result = { array[first], array[second] };
        return result;
      }
    }

    return new int[0];
  }
}
