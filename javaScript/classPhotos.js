function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);

  let redPossible = true;
  let bluePossible = true;

  for (let i = 0; i < blueShirtHeights.length; i++) {
    let blueVal = blueShirtHeights[i];
    let redVal = redShirtHeights[i];

    if (blueVal <= redVal) {
      bluePossible = false;
    }
    if (redVal <= blueVal) {
      redPossible = false;
    }
  }

  return bluePossible || redPossible;
}
