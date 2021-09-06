var selfDividingNumbers = function (left, right) {
  let sd = [];

  for (let i = left; i <= right; i++) {
    let nums = i.toString().split("");
    let valid = true;
    for (let j = 0; j < nums.length; j++) {
      let currentNum = Number(nums[j]);
      if (i % currentNum !== 0) {
        valid = false;
      }
    }
    if (valid) sd.push(i);
  }

  return sd;
};
