function spiralTraverse(array) {
  let copy = array.slice();
  let results = [];

  function traverse(direction, x, y) {
    results.push(copy[x][y]);
    copy[x][y] = Infinity;

    let right =
      copy[x][y + 1] && copy[x][y + 1] !== (undefined || Infinity)
        ? copy[x][y + 1]
        : null;
    let down =
      copy[x + 1] && copy[x + 1][y] !== (undefined || Infinity)
        ? copy[x + 1][y]
        : null;
    let left =
      copy[x][y - 1] && copy[x][y - 1] !== (undefined || Infinity)
        ? copy[x][y - 1]
        : null;
    let up =
      copy[x - 1] && copy[x - 1][y] !== (undefined || Infinity)
        ? copy[x - 1][y]
        : null;

    if (direction === "right") {
      if (right) {
        traverse("right", x, y + 1);
      } else {
        if (down) {
          traverse("down", x + 1, y);
        }
      }
    }

    if (direction === "down") {
      if (down) {
        traverse("down", x + 1, y);
      } else {
        if (left) {
          traverse("left", x, y - 1);
        }
      }
    }

    if (direction === "left") {
      if (left) {
        traverse("left", x, y - 1);
      } else {
        if (up) {
          traverse("up", x - 1, y);
        }
      }
    }

    if (direction === "up") {
      if (up) {
        traverse("up", x - 1, y);
      } else {
        if (right) {
          traverse("right", x, y + 1);
        }
      }
    }
  }

  traverse("right", 0, 0);
  return results;
}
