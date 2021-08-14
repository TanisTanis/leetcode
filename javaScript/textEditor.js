function textEditor1_2(queries) {
  let cursorPosition = 0;
  let result = [];
  let doc = "";

  let selectActive = false;
  let selectIndexOne = 0;
  let selectIndexTwo = 0;
  let selectedText = "";

  for (let i = 0; i < queries.length; i++) {
    let fullOperation = queries[i];
    let operation = fullOperation[0];
    let param = fullOperation[1];

    if (operation === "APPEND") {
      if (selectActive) {
        let before = doc.slice(0, selectIndexOne);
        let after = doc.slice(selectIndexTwo);
        doc = before + param + after;
        result.push(doc);
        continue;
      }

      let before = doc.slice(0, cursorPosition);
      let after = doc.slice(cursorPosition);
      doc = before + param + after;
      cursorPosition += param.length;
      result.push(doc);
    }

    if (operation === "MOVE") {
      let index = Number(param);
      if (index > doc.length) {
        cursorPosition = doc.length - 1;
      } else if (index < 0) {
        cursorPosition = 0;
      } else {
        cursorPosition = index;
      }

      if (doc.length === 0) {
        cursorPosition = 0;
      }
    }

    if (operation === "BACKSPACE") {
      if (selectActive) {
        let before = doc.slice(0, selectIndexOne);
        let after = doc.slice(selectIndexTwo);
        doc = before + after;
        cursorPosition = selectIndexOne;
        selectActive = false;
        result.push(doc);
        continue;
      }

      if (doc[cursorPosition - 1]) {
        let before = doc.slice(0, cursorPosition - 1);
        let after = doc.slice(cursorPosition);
        doc = before + after;
        cursorPosition--;
      }
      result.push(doc);
    }

    if (operation === "SELECT") {
      let idx1 = Number(fullOperation[1]);
      let idx2 = Number(fullOperation[2]);

      if (idx1 < 0) {
        idx1 = 0;
      }
      if (idx2 > doc.length) {
        idx2 = doc.length - 1;
      }
      selectedText = doc.slice(idx1, idx2 + 1);

      if (selectedText === "") {
        cursorPosition = idx1;
      } else {
        selectActive = true;
        selectIndexOne = idx1;
        selectIndexTwo = idx2;
      }
    }
  }

  return result;
}

console.log(
  textEditor1_2([
    ["APPEND", "You'll never find a rainbow if you're looking down"],
    ["APPEND", ""],
    ["MOVE", "-10"],
    ["APPEND", "START. "],
    ["MOVE", "57"],
    ["APPEND", "END."],
  ])
);
