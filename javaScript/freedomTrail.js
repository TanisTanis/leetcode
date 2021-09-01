var findRotateSteps = function (ring, key) {
  let ringArray = ring.split("");
  let totalSteps = 0;
  let currentArrayIndex = 0;

  for (let i = 0; i < key.length; i++) {
    const letter = key[i];
    let newValues = calculateCloserValue(ringArray, letter, currentArrayIndex);
    totalSteps += newValues.steps + 1;
    currentArrayIndex = newValues.index;
  }

  return totalSteps;
};

function calculateCloserValue(ringArray, letter, index) {
  let clockwiseRotations = 0;
  let clockwiseIndex;

  for (let i = index; i < ringArray.length; i++) {
    if (ringArray[i] === letter) {
      clockwiseIndex = i;
      break;
    }

    if (i === ringArray.length - 1) {
      i = -1;
    }

    clockwiseRotations++;
  }

  let counterClockwiseRotations = 0;
  let counterClockwiseIndex;

  for (let j = index; j >= 0; j--) {
    if (ringArray[j] === letter) {
      counterClockwiseIndex = j;
      break;
    }

    if (j === 0) {
      j = ringArray.length;
    }

    counterClockwiseRotations++;
  }

  if (clockwiseRotations <= counterClockwiseRotations) {
    return {
      index: clockwiseIndex,
      steps: clockwiseRotations,
    };
  } else {
    return {
      index: counterClockwiseIndex,
      steps: counterClockwiseRotations,
    };
  }
}

console.log(findRotateSteps("iotfo", "fioot"));
