function isMonotonic(array) {
  if (array.length <= 1) {
    return true;
  }

  let increasing = false;
  let decreasing = false;

  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    let next = array[i + 1];

    if (current === next) {
      continue;
    } else if (next > current) {
      increasing = true;
      break;
    } else if (next < current) {
      decreasing = true;
      break;
    }
  }

  if (increasing) {
    for (let j = 0; j < array.length; j++) {
      let current = array[j];
      let next = array[j + 1];

      if (next < current) {
        return false;
      }
    }
    return true;
  }

  if (decreasing) {
    for (let j = 0; j < array.length; j++) {
      let current = array[j];
      let next = array[j + 1];

      if (next > current) {
        return false;
      }
    }
    return true;
  }

  return true;
}
