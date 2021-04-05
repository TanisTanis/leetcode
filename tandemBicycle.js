function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  let length = redShirtSpeeds.length;
  let count = 0;

  if (fastest) {
    let i = 0;
    while (i < length) {
      let redMax = Math.max(...redShirtSpeeds);
      let blueMax = Math.max(...blueShirtSpeeds);
      let redMin = Math.min(...redShirtSpeeds);
      let blueMin = Math.min(...blueShirtSpeeds);

      if (redMax > blueMax || (redMax === blueMax && redMin > blueMin)) {
        count += redMax;
        redShirtSpeeds.splice(redShirtSpeeds.indexOf(redMax), 1);
        blueShirtSpeeds.splice(blueShirtSpeeds.indexOf(blueMin), 1);
      }
      if (redMax < blueMax || (redMax === blueMax && redMin < blueMin)) {
        count += blueMax;
        blueShirtSpeeds.splice(blueShirtSpeeds.indexOf(blueMax), 1);
        redShirtSpeeds.splice(redShirtSpeeds.indexOf(redMin), 1);
      }
      if (redMax === blueMax && redMin === blueMin) {
        count += redMax;
        redShirtSpeeds.splice(redShirtSpeeds.indexOf(redMax), 1);
        blueShirtSpeeds.splice(blueShirtSpeeds.indexOf(blueMin), 1);
      }
      i++;
    }

    return count;
  }
  if (!fastest) {
    let i = 0;

    while (i < length) {
      let redMax = Math.max(...redShirtSpeeds);
      let blueMax = Math.max(...blueShirtSpeeds);

      if (redMax > blueMax || redMax === blueMax) {
        count += redMax;
      }
      if (blueMax > redMax) {
        count += blueMax;
      }
      redShirtSpeeds.splice(redShirtSpeeds.indexOf(redMax), 1);
      blueShirtSpeeds.splice(blueShirtSpeeds.indexOf(blueMax), 1);
      i++;
    }

    return count;
  }
}
