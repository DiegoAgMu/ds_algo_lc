/*
    Reverse String

    Write a function that reverses a string. The input string is given as an array of characters s. 
    You must do this by modifying the input array in-place with O(1) extra memory.

    Example: ["h", "e", "l", "l", "o"] -> ["o", "l", "l", "e", "h"]

    Solution: 
    We must use two pointers in opposite direction, one at the begining and one at the end, then we must swap the corresponding value and move the pointers towards each other.
*/

function reverseString (arr: Array<string>) : void {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let rev = arr[left];
        arr[left] = arr[right];
        arr[right] = rev;
        left += 1;
        right -= 1;
    }
    // Log for trials
    // console.log(arr);
}

// Trial case
// reverseString(["h", "e", "l", "l", "o"]);