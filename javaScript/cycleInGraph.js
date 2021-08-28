function cycleInGraph(edges) {
  for (let i = 0; i < edges.length; i++) {
    let vertex = i;
    if (checkForCycle(vertex, edges)) {
      return true;
    }
  }
  return false;
}

function checkForCycle(vertex, edges) {
  let cycleFound = false;

  function checkAllEdges(currentVertex, startingVertex, count) {
    console.log(currentVertex, startingVertex);
    if (count > 0 && currentVertex === startingVertex) {
      cycleFound = true;
      return;
    }
    if (count > edges.length) {
      return;
    }
    if (edges[currentVertex].length > 0) {
      for (let j = 0; j < edges[currentVertex].length; j++) {
        let nextVertex = edges[currentVertex][j];
        checkAllEdges(nextVertex, startingVertex, count + 1);
      }
    }
  }

  checkAllEdges(vertex, vertex, 0);
  return cycleFound;
}
