import java.util.*;

class SunsetViews {

  public ArrayList<Integer> sunsetViews(int[] buildings, String direction) {

    int currentTallest = Integer.MIN_VALUE;
    ArrayList<Integer> result = new ArrayList<Integer>();

    if (direction.equals("EAST")) {
      for (int i = buildings.length - 1; i >= 0; i--) {
        int curVal = buildings[i];
        if (curVal > currentTallest) {
          currentTallest = curVal;
          result.add(i);
        }
      }
    }

    if (direction.equals("WEST")) {
      for (int i = 0; i < buildings.length; i++) {
        int curVal = buildings[i];
        if (curVal > currentTallest) {
          currentTallest = curVal;
          result.add(i);
        }
      }
    }

    Collections.sort(result);
    return result;
  }
}