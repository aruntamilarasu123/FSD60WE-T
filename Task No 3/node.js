//1. Do the below programs in anonymous function & IIFE

//   a.Print odd numbers in an array
//anonymous function 
var array = [1,2,3,4,5,6,7,8,9];
var L = array.length;
var array2 = [];
var sum = function(a) {
     return a % 2;
   };
  for (var i = 0; i< L; i++){
    if(sum(array[i])!=0){
   console.log(array[i]);
   } } 
//Output:
// 1
// 3
// 5
// 7
// 9

//IIFE function
(function(N){
 for (var i = 0; i< N.length; i++){
         if(N[i]%2!=0){
         console.log(N[i]);
         }
     }    
 })([1,2,3,4,5,6,7,8,9]);
//Output:
// 1
// 3
// 5
// 7
// 9

//   b.Convert all the strings to title caps in a string array
//anonymous function
var input = "welcome to all"
var output = function (input) {
    input = input.toLowerCase().split(' ');
    for (var i=0; i < input.length; i++){
        input[i] = input[i].charAt(0).toUpperCase() + input[i].slice(1);
    }
    return input.join(' ');
}
console.log(output(input));
//Output: Welcome To All

//IIFE function
(function(arr) {
    const titleCapsArray = arr.map
    (str => str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase()));
    console.log(titleCapsArray);
})(["welcome to all"]);
//Output: [ 'Welcome To All' ]

//  c.Sum of all numbers in an array
//anonymous function
const sumOfArray = function(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
};

console.log(sumOfArray([10, 20, 30, 40, 50]));
//Output: 150

//.IIFE function
(function(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    console.log(sum);
})([10, 20, 30, 40, 50]);
//Output: 150

//   d.Return all the prime numbers in an array
//anonymous function
const getPrimes = function(arr) {
    return arr.filter(num => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
};
console.log(getPrimes([2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
//Output: [ 2, 3, 5, 7, 11 ]

//IIFE function
(function(arr) {
    const primes = arr.filter(num => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
    console.log(primes);
})([2, 3, 4, 5, 6, 7, 8, 9, 10, 11]); 
//Output: [ 2, 3, 5, 7, 11 ]

//e.Return all the palindromes in an array
//anonymous function
const getPalindromes = function(arr) {
    return arr.filter(str => {
        const reversed = str.split('').reverse().join('');
        return str === reversed;
    });
};
console.log(getPalindromes(["madam", "hello", "racecar", "world", "level"]));  
//Output: ["madam", "racecar", "level"]

//IIFE function
(function(arr) {
    const palindromes = arr.filter(str => {
        const reversed = str.split('').reverse().join('');
        return str === reversed;
    });
    console.log(palindromes);
})(["madam", "hello", "racecar", "world", "level"]);  
//Output: ["madam", "racecar", "level"]

//  f.Return median of two sorted arrays of the same size.
//anonymous function
const getMedianOfTwoArrays = function(arr1, arr2) {
    const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
    const midIndex = mergedArray.length / 2;
    return (mergedArray[midIndex - 1] + mergedArray[midIndex]) / 2;
};
console.log(getMedianOfTwoArrays([1, 3, 5], [2, 4, 6]));  
// Output: 3.5

//IIFE function
(function(arr1, arr2) {
    const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
    const midIndex = mergedArray.length / 2;
    const median = (mergedArray[midIndex - 1] + mergedArray[midIndex]) / 2;
    console.log(median);
})([1, 3, 5], [2, 4, 6]);  
// Output: 3.5

//g.Remove duplicates from an array
//anonymous function
const removeDuplicates = function(arr) {
    return [...new Set(arr)];
};
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));  
// Output: [1, 2, 3, 4, 5]

//IIFE function
(function(arr) {
    const uniqueArray = [...new Set(arr)];
    console.log(uniqueArray);
})([1, 2, 2, 3, 4, 4, 5]);  
// Output: [1, 2, 3, 4, 5]

//h.Rotate an array by k times
//anonymous function
const rotateArray = function(arr, k) {
    k = k % arr.length; 
    return arr.slice(-k).concat(arr.slice(0, -k));
};
console.log(rotateArray([1, 2, 3, 4, 5], 2));  
// Output: [4, 5, 1, 2, 3]

//IIFE function
(function(arr, k) {
    k = k % arr.length; 
    const rotatedArray = arr.slice(-k).concat(arr.slice(0, -k));
    console.log(rotatedArray);
})([1, 2, 3, 4, 5], 2);  
// Output: [4, 5, 1, 2, 3]


//2. Do the below programs in arrow functions.
//   a.Print odd numbers in an array
const printOddNumbers = (arr) => arr.filter(num => num % 2 !== 0);
console.log(printOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));  
// Output: [1, 3, 5, 7, 9]

//b.Convert all the strings to title caps in a string array
const toTitleCaps = (arr) => arr.map(str => str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase()));
console.log(toTitleCaps(["hello world"]));  
//Output: ["Hello World"]

//c.Sum of all numbers in an array
const sumOf = (arr) => arr.reduce((acc, num) => acc + num, 0);
console.log(sumOf([1, 2, 3, 4, 5]));
// Output: 15

//d.Return all the prime numbers in an array
const getPriMes = (arr) => {
    const isPrime = (num) => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    return arr.filter(isPrime);
};
console.log(getPriMes([2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));  
//Output: [2, 3, 5, 7, 11]

//e.Return all the palindromes in an array
const getPalindroMes = (arr) => {
    const isPalindrome = (str) => str === str.split('').reverse().join('');

    return arr.filter(isPalindrome);
};
console.log(getPalindroMes(["madam", "hello", "racecar", "world", "level"]));  
//Output: ["madam", "racecar", "level"]

