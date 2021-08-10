class CaesarCypherEncryptor {
  public static String caesarCypherEncryptor(String str, int key) {
    String alphabet = "abcdefghijklmnopqrstuvwxyz";
    String resultString = "";

    for (int i = 0; i < str.length(); i++) {
      char val = str.charAt(i);
      int currentIndex = alphabet.indexOf(val);
      int newIndex = indexCalc(currentIndex, key);
      resultString += alphabet.charAt(newIndex);
    }

    return resultString;
  }

  public static int indexCalc(int currentIndex, int shift) {
    int newIndex = currentIndex + shift;
    while (newIndex >= 26) {
      newIndex -= 26;
    }
    return newIndex;
  }
}
