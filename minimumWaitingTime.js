function minimumWaitingTime(queries) {
  // sort array

  let sorted = queries.sort((a, b) => {
    return a - b;
  });

  let totalCount = 0;
  let prevCount = 0;

  // iterate through
  for (let i = 0; i < sorted.length; i++) {
    totalCount += prevCount;
    prevCount += queries[i];
  }

  return totalCount;
}
