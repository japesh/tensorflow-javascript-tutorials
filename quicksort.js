// function partition(array, left, right) {
//     let i = left;
//     let pivot = array[right];
//     console.log(left, right, pivot)
//     for (let j = left; j < right; j++) {
//         if (array[j] < pivot) {
//             console.log("abc");
//             [array[i], array[j]] = [array[j], array[i]];
//             i++;
//         }
//         console.log("in loop array", array)
//     }
//     [array[i], array[right]] = [array[right], array[i]];
//     console.log(array)
//     return i
// }

// function quicksort(array, left, right, k) {
//     if (left < right) {
//         const pi = partition(array, left, right);
//         if(pi===k){
//             return array[k]
//         }
//         if (pi < k) {
//             return quicksort(array, pi + 1, right, k)   
//         }
//         return quicksort(array, left, pi - 1, k)


//     }
//     return -1
// }
// arr = [10, 7, 8, 9, 1, 5];
// console.log("quicksort>>>>>>", quicksort(arr, 0, arr.length - 1, 2-1))

// console.log(arr) 


// find max product element
// function findMaxProduct(array){
//     let max = -Infinity, secondMax = -Infinity;
//     let min = Infinity, secondMin = Infinity;
//     for(let i= 0; i< array.length; i++){
//         if(max<array[i]){
//             secondMax = max;
//             max = array[i]
//         }else if(secondMax < array[i]){
//             secondMax = array[i]
//         }

//         if(min>array[i]){
//             secondMin = min;
//             min = array[i]
//         }else if(secondMin > array[i]){
//             secondMin = array[i]
//         }

//     }

//     return Math.max(max*secondMax, min*secondMin);
// }

// const nums = [-10, 20, 5, 2, 8];

// console.log(findMaxProduct(nums))

// find max sum of sub array

// function findMaxSumSubArray (array){
//     const sumMap = [] 
//     const maxSumMap = [];

//     for (let i=0; i<array.length; i++ ) {
//         sumMap[i] = array[i];
//         maxSumMap[i] = array[i];
//         for (let j=i+1; j< array.length; j++){
//             sumMap[i] += array[j]
//             if(sumMap[i]>maxSumMap[i]){
//                 maxSumMap[i] = sumMap[i];
//             }
//         }
//     }


//     return Math.max(...maxSumMap)
// }


// function maxSubArray(nums) {
//     if (nums.length === 0) {
//         throw new Error("Array must contain at least one element.");
//     }

//     let max_current = nums[0];
//     let max_global = nums[0];

//     for (let i = 1; i < nums.length; i++) {
//         max_current = Math.max(nums[i], max_current + nums[i]);
//         if (max_current > max_global) {
//             max_global = max_current;
//         }
//     }

//     return max_global;
// }

// const nums = [-2, 1, -3, 4, -1, 2, -1, 5, 4];

// console.log("maxSubArray", maxSubArray(nums)); // Output: 6

// console.log("findMaxSumSubArray", findMaxSumSubArray(nums));


// Rotate a matrix 90 degrees clockwise


// function rotateMatrix90DegreesClockwise(matrix,){
//     const newMatrix = []
//     for (let j = 0; j<matrix[0].length; j++){
//         for (let i=0; i<matrix.length; i++){
//             newMatrix[j] = newMatrix[j] || [];
//             newMatrix[j][i] = matrix[i][j]
//         }
//     }

//     for (i=0; i<matrix.length; i++){
//         newMatrix[i].reverse();
//     }
//     return newMatrix
// }

// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// console.log(rotateMatrix90DegreesClockwise(matrix));

// Given a string, find the longest substring without repeating characters.

// function lengthOfLongestSubstring(string) {
//     let maxLength = 0;
//     const indexMap = {}
//     let start = 0
//     for (let i = 0; i < string.length; i++) {
//         const char = string[i];
//         // console.log("indexMap[char]!==undefined", indexMap[char]!==undefined, indexMap[char] >= start)
//         // && indexMap[char] >= start
//         if (indexMap[char] !== undefined && indexMap[char] >= start) {
//             // const currentDistance = i - indexMap[char]
//             // if(currentDistance>maxLength){
//             //     maxLength = currentDistance
//             // }
//             start = indexMap[char] + 1
//         }
//         indexMap[char] = i
//         // console.log("start", start, indexMap)
//         maxLength=Math.max(maxLength, i-start+1)
//         // console.log("maxLength",maxLength)
//     }

//     // console.log("indexMap", indexMap)
//     return maxLength
// }

// // Example usage:
// // const s = "edabcacbb";
// // console.log("abcabcbb",lengthOfLongestSubstring("abcabcbb"));
// // console.log("abcdef",lengthOfLongestSubstring("abcdef"));
// // console.log("bbbbb",lengthOfLongestSubstring("bbbbb"));
// // console.log("",lengthOfLongestSubstring(""));
// // console.log("pwwkew",lengthOfLongestSubstring("pwwkew"));
// // console.log("abcdeaa",lengthOfLongestSubstring("abcdeaa"));
// // console.log("AaBbCcDd",lengthOfLongestSubstring("AaBbCcDd"));
// // console.log("a b c a b c",lengthOfLongestSubstring("a b c a b c"));
// console.log("123412345",lengthOfLongestSubstring("123412345"));

// function mergeSort(array1, array2) {
//     const newArray = [];
//     let i1 = 0;
//     let i2 = 0;
//     for (; i1 < array1.length && i2 < array2.length;) {
//         if (array1[i1] < array2[i2]) {
//             newArray.push(array1[i1]);
//             i1++;
//         } else {
//             newArray.push(array2[i2]);
//             i2++;
//         }
//     }
//     for (; i1 < array1.length; i1++) {

//         newArray.push(array1[i1]);


//     }
//     for (; i2 < array2.length; i2++) {

//         newArray.push(array2[i2]);


//     }
//     return newArray
// }

// console.log("mergeSort", mergeSort([1, 2, 3, 4], [3, 4, 5, 6]))


// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

// function hasCycle(head) {
//     if (!head || !head.next) return false;

//     let slow = head;
//     let fast = head;

//     while (fast !== null && fast.next !== null) {
//         slow = slow.next;       // Move slow pointer one step
//         fast = fast.next.next;  // Move fast pointer two steps
//         console.log(slow.val, fast.val)
//         if (slow === fast) {    // Check if the two pointers meet
//             return true;        // Cycle detected
//         }
//     }

//     return false;  // No cycle
// }

// // Example usage:
// // Creating a cycle linked list:
// // 1 -> 2 -> 3 -> 4 -> 2 (back to node 2)
// const node4 = new ListNode(4);
// const node3 = new ListNode(3, node4);
// const node2 = new ListNode(2, node3);
// const node1 = new ListNode(1, node2);
// node4.next = node2; // Creates a cycle

// console.log(hasCycle(node1));

let i=0;
let j=0;
while(j<=10||i<=10){
    i+=1
    j+=2;
    console.log(i%10, j%10)
}