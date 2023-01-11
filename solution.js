const threeSum = (nums) => {
  let output = [];
  // order the array by ascending value
  nums.sort((a, b) => a - b);

  for (let a = 0; a < nums.length; a++) {
    // if number is same as previous number, skip it to skip duplicates
    if (a > 0 && nums[a] == nums[a - 1]) continue;
    // check sum against 2 other numbers starting with one to the right of 'a' and the very last value
    let b = a + 1;
    let c = nums.length - 1;

    while (c > b) {
      let sum = nums[a] + nums[b] + nums[c];
      if (sum > 0) {
        // if sum is too high, decrease c
        c--;
      } else if (sum < 0) {
        // if sum is too low, increase b
        b++;
      } else {
        output.push([nums[a], nums[b], nums[c]]);
        // advance to see if 'a' index has any more matches
        b++;
        c--;
        // skip any duplicate values of b or c so we don't get a duplicate result.
        while (nums[b] == nums[b - 1]) b++;
        while (nums[c] == nums[c + 1]) c--;
      }
    }
  }

  return output;
};
console.log(threeSum([0, 0, 0, 0]));
