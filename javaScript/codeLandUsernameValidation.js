function CodelandUsernameValidation(str) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const allValidChars = "abcdefghijklmnopqrstuvwxyz0123456789_";

  const length = str.length;
  const first = str[0];
  const last = str[str.length - 1];

  if (length < 4 || length > 25 || !letters.includes(first) || last === "_") {
    return false;
  }

  for (let i = 1; i < str.length - 2; i++) {
    let char = str[i];
    if (!allValidChars.includes(char)) {
      return false;
    }
  }

  return true;
}
