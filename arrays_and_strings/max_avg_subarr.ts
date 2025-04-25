/*
    Maximum Average Subarray I
    You are given an integer array nums consisting of n elements, and an integer k. 
    Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

    Example: nums = [1,12,-5,-6,50,3], k = 4 -> 12.75000

    We may start by noticing that because we have a fixed subarray length, this is analogous as finding the biggest sum and returning the biggest sum divided by k.
*/

function findMaxAverage(nums: number[], k: number): number {
    let curr = 0;
    for (let i = 0; i < k; i++) {
        curr += nums[i];
    }
    let ans = curr;
    for (let i = k; i < nums.length; i++) {
        curr += nums[i] - nums[i - k];
        ans = Math.max(ans, curr);
    }
    return ans/k;
};

// Test case
// console.log(findMaxAverage([1,12,-5,-6,50,3], 4));