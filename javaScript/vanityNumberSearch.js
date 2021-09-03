function vanity(codes, numbers) {
  //codes are the words

  //looking for phone numbers that match a given vanity code
  let result = numbers.filter((num) => {
    let matchFound = false;
    codes.forEach((code) => {
      let phoneQueue = num.slice(1).split("");

      while (phoneQueue.length > 0) {
        let queue = code.split("");
        let sequenceStarted = false;

        for (let i = 0; i < phoneQueue.length; i++) {
          let currentNum = phoneQueue[i];
          let letterToMatch = queue[0];

          if (digitMap[currentNum]) {
            if (sequenceStarted) {
              if (digitMap[currentNum].includes(letterToMatch)) {
                queue.shift();
                if (queue.length === 0) {
                  console.log("hello");
                  matchFound = true;
                  break;
                }
                continue;
              } else {
                break;
              }
            } else {
              if (digitMap[currentNum].includes(letterToMatch)) {
                queue.shift();
                sequenceStarted = true;
              }
            }
          } else {
            break;
          }
        }
        phoneQueue.shift();
      }
    });
    return matchFound;
  });

  return result;
}

const digitMap = {
  2: "ABC",
  3: "DEF",
  4: "GHI",
  5: "JKL",
  6: "MNO",
  7: "PQRS",
  8: "TUV",
  9: "WXYZ",
};

console.log(
  vanity(
    ["TWLO"],
    [
      "+14157088956",
      "+15109926333",
      "+17474824380",
      "+1415123456",
      "+919810155555",
    ]
  )
);
