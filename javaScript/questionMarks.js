function QuestionsMarks(str) {
  let numbers = "0123456789";

  let activeQMSearch = false;
  let firstNum;
  let currentQMCount = 0;
  let booleans = [];

  for (let i = 0; i < str.length; i++) {
    let val = str[i];

    if (numbers.includes(val)) {
      if (activeQMSearch) {
        const sum = Number(val) + Number(firstNum);

        if (sum === 10) {
          if (currentQMCount === 3) {
            booleans.push(true);
          } else {
            booleans.push(false);
          }
        }

        firstNum = val;
        currentQMCount = 0;
      } else {
        activeQMSearch = true;
        firstNum = val;
      }
    } else if (val === "?") {
      if (activeQMSearch) {
        currentQMCount++;
      }
    }
  }

  if (booleans.length === 0 || booleans.indexOf(false) !== -1) {
    return false;
  } else {
    return true;
  }
}
