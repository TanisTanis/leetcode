import java.util.*;

class Program {

  public int firstNonRepeatingCharacter(String string) {
    HashMap<Character, Integer> charFrequencies = new HashMap<Character, Integer>();

    for (int i = 0; i < string.length(); i++) {
      char letter = string.charAt(i);
      charFrequencies.put(letter, charFrequencies.getOrDefault(letter, 0) + 1);
    }

    for (int j = 0; j < string.length(); j++) {
      int occurences = charFrequencies.get(string.charAt(j));
      if (occurences == 1) {
        return j;
      }
    }
    return -1;
  }
}