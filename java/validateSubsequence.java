import java.util.*;

class ValidateSubsequence {
  public static boolean isValidSubsequence(List<Integer> array, List<Integer> sequence) {
    int sequenceInx = 0;
    for (int i = 0; i < array.size(); i++) {
      if (sequenceInx == sequence.size()) {
        break;
      }
      int currVal = array.get(i);
      if (currVal == sequence.get(sequenceInx)) {
        sequenceInx++;
      }
    }
    if (sequenceInx >= sequence.size()) {
      return true;
    } else {
      return false;

    }
  }
}