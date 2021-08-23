import java.util.*;

class SingleCycleCheck {
  public static boolean hasSingleCycle(int[] array) {

    int count = 0;
    int currentIndex = 0;
    int[] indexes = new int[array.length];
    Arrays.fill(indexes, 1);

    while (count < array.length) {
      indexes[currentIndex] = 0;
      int newIndex = currentIndex + array[currentIndex];
      currentIndex = indexCalc(newIndex, array.length);
      count++;
    }

    boolean allVisited = true;
    for (int i = 0; i < indexes.length; i++) {
      if (indexes[i] == 1) {
        allVisited = false;
      }
    }

    if (currentIndex == 0 && allVisited) {
      return true;
    } else {
      return false;
    }

  }

  private static int indexCalc(int index, int length) {
    int newIndex = index % length;
    return newIndex >= 0 ? newIndex : newIndex + length;
  }
}
