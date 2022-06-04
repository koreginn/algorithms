const nums = [1, 2, 3, 4, 5, 5];

const hasDuplicates = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        const thisNum = nums[i];

        for (let j = 0; j < nums.length; j++) {
            if (j !== i) {
                if (nums[j] === thisNum) {
                    return true;
                }
            }
        }
    }

    return false;
}

console.log(hasDuplicates(nums));


