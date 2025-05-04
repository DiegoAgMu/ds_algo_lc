/*
    K Radius Subarray Averages

    You are given a 0-indexed array nums of n integers, and an integer k.
    The k-radius average for a subarray of nums centered at some index i with the radius k is the average of all elements in nums between the indices i - k and i + k (inclusive). 
    If there are less than k elements before or after the index i, then the k-radius average is -1.
    Build and return an array avgs of length n where avgs[i] is the k-radius average for the subarray centered at index i.
    The average of x elements is the sum of the x elements divided by x, using integer division. The integer division truncates toward zero, which means losing its fractional part.

    Example: nums = [7,4,3,9,1,8,5,2,6], k = 3 -> [-1,-1,-1,5,4,4,-1,-1,-1]

    Solution:
    We have a fixed length window, we may iterate through every element in the array and iterate until we find a valid window
    at every index that we don't find a valid window we simply change the value to -1.
    For valid windows, we use the prefix sum to get the sum of elements in the subarray, and then we just get the integer average to add it to the output array.
*/

function getAverages(nums: number[], k: number): number[] {
    let kAvg: Array<number> = new Array(nums.length);
    // We create the prefix sum
    let prefix: Array<number> = [nums[0]];
    for (let i = 1; i< nums.length; i++) {
        prefix.push(nums[i] + prefix[prefix.length - 1]);
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (i - k < 0 || i + k >= nums.length ) {
            kAvg[i] = -1
        } else {
            kAvg[i] = Math.floor((prefix[i+k] - prefix[i-k] + nums[i-k])/(2*k+1));
        }
    }
    return kAvg;
};

console.log(getAverages([7,4,3,9,1,8,5,2,6], 3))