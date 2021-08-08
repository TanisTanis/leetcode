import java.util.*;

class ProductSum {

  public static int productSum(List<Object> array) {
    return arraySearch((ArrayList<Object>) array, 1);
  }

  public static int arraySearch(ArrayList<Object> array, int depth) {
    int sum = 0;

    for (Object val : array) {
      if (val instanceof ArrayList) {
        @SuppressWarnings("unchecked")
        ArrayList<Object> ar = (ArrayList<Object>) val;
        sum += arraySearch(ar, depth + 1);
      } else {
        sum += (int) val;
      }
    }
    return sum * depth;
  }
}