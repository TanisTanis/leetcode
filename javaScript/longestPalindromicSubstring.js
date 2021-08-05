function longestPalindromicSubstring(string) {
  let longestPalindrome;
  let longestLength = 0;

  for (let i = 0; i < string.length; i++) {
    let currentString = "";
    for (let j = i; j < string.length; j++) {
      currentString += string[j];
      if (palindromeCheck(currentString)) {
        if (currentString.length > longestLength) {
          longestLength = currentString.length;
          longestPalindrome = currentString;
        }
      }
    }
  }

  function palindromeCheck(word) {
    if (word.length === 1) {
      return true;
    }

    let backwords = "";

    for (let q = word.length - 1; q >= 0; q--) {
      backwords += word[q];
    }

    if (word === backwords) {
      return true;
    } else {
      return false;
    }
  }

  return longestPalindrome;
}
