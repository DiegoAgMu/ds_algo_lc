/*
    Minimum Value to Get Positive Step by Step Sum

    Given an array of integers nums, you start with an initial positive value startValue.
    In each iteration, you calculate the step by step sum of startValue plus elements in nums (from left to right).
    Return the minimum positive value of startValue such that the step by step sum is never less than 1.

    Example: [-3,2,-3,4,2] -> 5
*/

function minStartValue(nums: number[]): number {
    let sum = 0;
    let min = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        min = Math.min(min, sum);
    }
    if (min < 0) {
        return 1 - min;
    } else {
        return 1;
    }
};

// Test score 
//console.log(minStartValue([-3,2,-3,4,2]))