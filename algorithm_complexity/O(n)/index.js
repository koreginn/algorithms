let nums = [1, 2, 3, 4, 5];

const sumOfNumbers = (nums) => {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    return sum;
}

console.log(sumOfNumbers(nums));

//OR

//P.S. Только если мы уверены, что у нас массив отсортирован и начинается с 1!!!

const sumOfNumbersTwo = (nums) => {
    return nums.length * (nums.length + 1) / 2;
}

console.log(sumOfNumbersTwo(nums));