/*
    Running Sum

    Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
    Return the running sum of nums.

    Example: [1,2,3,4] -> [1,3,6,10]

    Solution: 
    This is equal to creating the prefix sum.
*/

function runningSum(nums: number[]): number[] {
    let prefix = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        prefix.push(nums[i] + prefix[prefix.length - 1])
    } 
    return prefix;
};

//Test Case
// console.log(runningSum([1,2,3,4]));