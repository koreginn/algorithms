const sumOne = [2, 7, 11, 15];
const sumTwo = [-10, -3, 0, 2, 7, 9, 11, 15, 186];
const sumThree = [-10, -3, 0, 1, 2, 7, 9, 11, 15, 186];

let twoSum = (nums, target) => {
    let leftIndex = 0;
    let rightIndex = nums.length -1;
    let result = [];

    while (leftIndex < rightIndex) {
      if (nums[leftIndex] + nums[rightIndex] > target) {
          rightIndex--;
      } else if (nums[leftIndex] + nums[rightIndex] < target) {
          leftIndex++;
      } else {
          result.push([leftIndex, rightIndex]);
          rightIndex--;
          leftIndex++;
      }
    }
    
    return result;
};

console.log(twoSum(sumOne, 9));
console.log(twoSum(sumTwo, 9));
console.log(twoSum(sumThree, 9));