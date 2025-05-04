/*
    First Pivot Index

    Given an array of integers nums, calculate the pivot index of this array.

    The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

    If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

    Return the leftmost pivot index. If no such index exists, return -1.

    Example: [1,7,3,6,5,6] -> 3
*/
function pivotIndex(nums: number[]): number {
    //First we get the prefix sum
    let prefix: Array<number> = [nums[0]];

    for (let i = 1; i < nums.length; i++) {
        prefix.push(nums[i] + prefix[prefix.length - 1]);
    }

    for (let i = 0; i < nums.length; i++) {
        let leftSum = i === 0 ? 0 : prefix[i - 1];
        let rightSum = i === nums.length - 1 ? 0 : prefix[prefix.length - 1] - prefix[i+1] + nums[i + 1];
        if (leftSum === rightSum) {
            return i
        }
    }

    return -1
};