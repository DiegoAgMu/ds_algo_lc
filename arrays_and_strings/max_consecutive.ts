/*
    Max Consecutive Ones III
    
    Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

    Example: [1,1,1,0,0,0,1,1,1,1,0], k = 2 -> 6

    This problem is equal to find the maximum subarray with at most k 0's. Therefore the constrain is window.count(0) <= k and it is solved with sliding window
*/

function longestOnes(nums: number[], k: number): number {
    let left = 0, ans = 0, curr = 0;
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            curr += 1;
        }
        while (curr > k) {
            if (nums[left] === 0) {
                curr -= 1;
            }
            left++;
        }
        ans = Math.max(ans, right - left + 1);
    }
    return ans;
};

// Test case
//console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2));