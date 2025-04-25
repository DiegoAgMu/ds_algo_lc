/*
    Squares of a  sorted array
    Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

    Example: [-4, -1, 0, 3, 10] -> [0, 1, 9, 16, 100]

    Solution: We must notice that we may devide our array into 2 subarrays, the negative part is in decreasing order and the positive part is in ascending order, therefore if we place two pointers on each array end, we must compare the absolute value of each element to find
    the larger one and add its square to the final array in reverse order. We must only move the pointer of the element that was added. Continue this path until the pointers meet.
*/

let squareSortArr = (arr: Array<number>) : Array<number> => {
    let left = 0;
    let right = arr.length - 1;
    let n = arr.length - 1;
    let square: Array<number> = new Array(arr.length);

    while (left <= right) {
        if (Math.abs(arr[left]) < Math.abs(arr[right])) {
            square[n] = arr[right] * arr[right];
            right -= 1;
        } else {
            square[n] = arr[left] * arr[left];
            left += 1;
        }
        n -= 1;
    }

    return square;
}

// Test
//console.log(squareSortArr([-4, -1, 0, 3, 10]));