/*
Task 2 

Q. Time to implement the filter function to convert a given array into one in which all elements are 
those which are multiples of 10. 
Given the array, input = [....], 
can you write a filter function on this array and reduce it to the one required? 
The input array is : [23,45,678,90,33,21,780,670,498,7493,58940,6565,900,370,1299,1300]
Store the output in a new array called "output" and print the result
*/

const input =  [23,45,678,90,33,21,780,670,498,7493,58940,6565,900,370,1299,1300]
const output = input.filter(value => value%10===0);
console.log(output);