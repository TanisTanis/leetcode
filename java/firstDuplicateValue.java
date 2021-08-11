import java.util.HashMap;

class FirstDuplicateValue {

  public int firstDuplicateValue(int[] array) {
    HashMap<Integer, Integer> occurences = new HashMap<Integer, Integer>();
    for (int num : array) {
      occurences.put(num, occurences.getOrDefault(num, 0) + 1);
      if (occurences.get(num) == 2) {
        return num;
      }
    }
    return -1;
  }
}