
class PalindromeCheck {
  public static boolean isPalindrome(String str) {
    String reverse = "";
    System.out.println(str.length());
    for (int i = str.length() - 1; i >= 0; i--) {
      reverse += str.charAt(i);
    }
    System.out.println(reverse);
    return str.equals(reverse);
  }
}