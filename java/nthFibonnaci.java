import java.util.*;

class NthFibonacci {
  public static int getNthFib(int n) {

    ArrayList<Integer> sequence = new ArrayList<Integer>();
    sequence.add(0);
    sequence.add(1);

    int i = 3;

    while (i <= n) {
      sequence.add(sequence.get(i - 3) + sequence.get(i - 2));
      i++;
    }

    return sequence.get(n - 1);
  }
}
