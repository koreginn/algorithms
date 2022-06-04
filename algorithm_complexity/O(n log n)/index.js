//P.S. Бинарный поиск очень плох для поиска дублей, здесь просто показано оценка сложности!!!

let nums = [1, 2, 3, 4, 5];

const searchFor = (items, num) => {
  let startElem = 0;
  let endElem = items.length - 1;

  while(startElem <= endElem) {
    let middleElem = Math.floor((startElem + endElem) / 2);

    if (items[middleElem] === num) {
      return middleElem;
    } else if (items[middleElem] < num) {
      startElem = middleElem + 1;
    } else if (items[middleElem] > num) {
      endElem = middleElem - 1;
    }
  }

  return -1;
}

const hasDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (searchFor(nums, nums[i]) !== -1) {
      return true;
    }
  }

  return false;
};

console.log(hasDuplicates(nums));