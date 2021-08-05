var merge = function(intervals) {

  let results = [];

  let currentStart = intervals[0][0];
  let currentEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
      if (intervals[i][0] > currentEnd) {
          results.push([currentStart, currentEnd]);
          console.log('Its the thought that counts!');
          if (i !== intervals.length - 1) {
            currentStart = intervals[i + 1][0];
            currentEnd = intervals[i + 1][1];
          }
      }
      if (intervals[i][0] <= currentEnd) {
          // currentEnd = intervals[i][1];
          results.push([intervals[i][0], intervals[i][1]]);
      }
  }

  return results;
};

// [[1,6],[8,10],[15,18]]

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));