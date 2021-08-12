function StringChallenge(strArr) {
  let valid = "0123456789.,";
  let numbers = "0123456789";

  let currentComma = false;
  let commaCount = 0;
  let commaLength = 0;

  let currentNumberString = "";

  let period = false;
  let decimals = false;

  for (let i = 0; i < strArr[0].length; i++) {
    let val = strArr[0][i];

    /*
      if not a number, period, or comma, return false

      we could allow spaces with a simple continue block

      if (val === ' ') {
        continue;
      }

      but im not sure if that is wanted/needed
    */

    if (valid.indexOf(val) === -1) {
      return false;
    }

    //check to ensure multiple periods dont exist
    if (val === ".") {
      if (!period) {
        period = true;
        decimals = true;
        currentComma = false;
      } else {
        return false;
      }

      if (currentComma && commaLength !== 3) {
        return false;
      }
      currentNumberString = "";
    }

    //comma logic

    if (currentComma && val !== ",") {
      commaLength++;
    }

    if (val === ",") {
      if (decimals) {
        return false;
      }

      if (currentComma) {
        if (commaLength !== 3) {
          return false;
        }
        commaLength = 0;
      }
      currentComma = true;
      commaCount++;
      currentNumberString = "";
    }

    //check to make sure beginning is not longer than 3 numbers before comma

    if (numbers.indexOf(val) !== -1 && !period) {
      currentNumberString += val;
    }

    if (currentNumberString.length > 3) {
      return false;
    }

    //check that number does not preemptively end

    if (
      i === strArr[0].length - 1 &&
      currentNumberString.length !== 3 &&
      currentComma
    ) {
      return false;
    }

    //we could check that number does not end on a period, but that is still a valid number...? sort of..
  }

  return true;
}

console.log(StringChallenge(["10,900."]));
