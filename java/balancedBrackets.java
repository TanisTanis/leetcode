import java.util.*;

class Program {

  public static boolean balancedBrackets(String str) {

    HashMap<Character, Character> matches = new HashMap<Character, Character>() {
      {
        put('(', ')');
        put('{', '}');
        put('[', ']');
      }
    };

    ArrayList<Character> stack = new ArrayList<Character>();

    for (int i = 0; i < str.length(); i++) {
      char current = str.charAt(i);
      if (current == '(' || current == '{' || current == '[') {
        stack.add(current);
      }
      if (current == ')' || current == '}' || current == ']') {
        if (stack.size() == 0) {
          return false;
        }
        char lastVal = stack.remove(stack.size() - 1);
        if (matches.get(lastVal) != current) {
          return false;
        }
      }
    }

    if (stack.size() != 0) {
      return false;
    }

    return true;
  }
}