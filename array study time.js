// This is the SPLICE method this will delete element from the array
// example: 
let arr = ['I', 'go', 'home'];
delete arr [1]; // remove "go"
alert( arr[1]); // undefined

// now arr = ["I",  , "home"];
alert( arr.length ); // 3  <---- the element was removed , but the array still has 3 elements, we can see that when we call the length of the array.


// the arr.splice method is a swiss army knife for arrays. it can do everything: insert, remove and replace elements. 

arr.splice(start[, deleteCount, elem1, ...arr, elemN])

let arr = ["I", "study", "JavaScript"];

arr.splice(1, 1); // from index 1 remove 1 element

// easy, right? Starting from the index 1 it removed 1 Element.
// Now let remove the first 3 elements and replace them with another.
let arr = ["I", "study", "JavaScript", "right", "now"];
// remove 3 first elements and replace them with another
arr.splice( 0, 3, "let's", "dance" );
alert( arr )// now ["Lets", "dance", "right", "now"]

// here we can see that splice returns the array of removed elements. 
let arr = ["I", "study", "JavaScript", "right", "now"];
// remove 2 first elements
let removed = arr.splice( 0, 2 );
alert( removed ); //"I", "study" <----array of removed elements


The splice method is also able to insert the elements without any removals. For that we need to set deleteCount to 0:

let arr = ["I", "study", "JavaScript"];
// from index 2
// delete 0
// then insert "complex" and "language"
arr.splice(2, 0, "complex", "language");

alert( arr ); // "I", "study", "complex", "language", "JavaScript"


// negative indexes are also allowed
// here and in other array methods, negative indexes are allowed. They specify the position from the end of the array, 
let arr = [1, 2, 5];

// from index -1 (one step from the end)
// delete 0 elements, 
// then insert 3 and 4
arr.splice( -1, 0, 3, 4);
alert( arr ); // 1, 2, 3, 4, 5

-------------------------------------------------------------------------------------

// This is the SLICE method this will delete element from the array
// The syntax is:
arr.slice([start], [end])
// It returns a new array coping to it all items from index start to end( not including end ) but start & end can be negative, in that case position from array end is assumed.
let arr = ["t", "e", "s", "t"];
alert( arr.slice(1, 3) ); // e, s (copy from 1 to 3 ) but not the end
alert( arr.slice(-2) ); // s,t (copy from 02 till the end)

// We can also call it without arguments: arr.slice() creates a copy fo arr. That's often used to obtain a copy for further transformations that should not affect the original array.
arr.slice()

-------------------------------------------------------------------------------------


// This is the CONCAT method 
// The method arr.concat creates a new array that includes values from other arrays and additional items.
// The syntax is : 
arr.concat(arg1, arg2...)
// its accepts any number of arguments - either arrays or values.
// The result is a new array containing items from arr, then arg1, arg2 etc
// For example:

// create an array from: arr and [3,4]
let arr = [1, 2];
alert( arr.concat([3, 4]) ); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
alert(arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6

// Normally, it only copies elements from arrays. Other objects, even if they look like arrays, are added as a whole:

let arr = [1,2];
let arrayLike = {
  0: "something",
  length: 1
};
alert( arr.concat(arrayLike)); // 1,2[object Object]

//...But if an array-like object has a special Symbol.isConcatSpreadable property, then it's treated as an array by concat: its elements are added instead:

let arr = [1,2];
let arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  lenth: 2
};
alert( arr.concat(arrayLike)); // 1,2, something, else

-------------------------------------------------------------------------------------

// Iterate:forEach
// The arr.foreach method allows to run a function for every element of the array.
// The Syntax:
arr.forEach(funciton(item, index, array){
  //...do something with item
})

// For instance this shows each element of the array:
// for each element call alert
["Bilbo", "Gandalf", "Nazgul"].forEach(alert);

// and this code is more elaborate about their position in the target array:
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  alert(`${item} is at index ${index} in ${array}`);
});

-------------------------------------------------------------------------------------

// Searching in array
// Now lets cover methods that search in an array 

// indexOf/lastIndexOf and includes
// The methods arr.indexOf and arr.includes have the similar syntax and do essentially the same as their string counterparts, but operate on items instead of characters:

// arr.indexOf(item, from) - looks for item starting from index from, and returns the index where it was found, otherwise -1.
// arr.includes(item, from) - looks for item starting from index from, returns true if found.
// usually these methods are used with only one argument: the item to search. By default, the search is from the beginning. 

//example:

let arr = [1, 0, false]; 
alert( arr.indexOf(0) ); // 1
alert( arr.indexOf(false) ); // 2
alert( arr.indexOf(null) ); // -1

alert( arr.includes(1) ); // true

// Please note that indexOf uses the equality === for comparison. So, if we look for false, it finds exactly false and not the zero.
// If we want to check if item exists in the array, and don't need the exact index, then arr.includes is preferred.
// The method arr.lastIndexOf is the same as indexOf, but looks for from right to left. 

let fruits = ['Apple', 'Orange', 'Apple']
alert( fruits.indexOf('Apple') ); // 0 (first Apple)
alert( fruits.lastIndexOf('Apple') ); // 2 (last Apple)

// A minor, but noteworthy feature of includes is that it correctly handles NaN, unlike indexOf:
const arr = [NaN];
alert( arr.indexOf(NaN) ); // -1 (wrong, should be 0)
alert( arr.includes(NaN) ); // true (correct)
// that's because includes was added to JavaScript much later and uses the more up to date comparison algorithm internally.

// find and findIndex/findLastIndex
 // imagine we have an array of objects. How do we find an object with the specific condition?
 // here the arr.find(fn) method comes in handy. 
 // The syntax is: 
 let result = arr.find(function(item, index, array) {
  // if true is returned, item is returned and iteration is stopped
  // for falsy scenario returns undefined
 });

//filter
// The find method looks for a single (first) element that makes the function return true.
// if there may be many, we can use arr.filter(fn).
// The syntax is similar to find, but filter returns an array fo all matching elements:
let result = arr.filter(function(item, index, array){
  // if true item is pushed to results and the iteration continues
  // returns empty array if nothing found
});

// for example: 
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"},
];
// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);
alert(someUsers.length); // 2

-------------------------------------------------------------------------------------

// Transform an array

// map
// The arr.map method is one of the most useful and often used.
// It calls the function for each element of the array and returns the array of results.
// The syntax is: 
let result = arr.map(function(item, index, array){
  // returns the new value instead of item
});

// for instance, here we transform each element into its length:
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,6,7

// sort(fn)
 // The call to arr.sort() sorts the array in place, changing its element order.
//  It also returns the sorted array, but the returned value is usually ignored, as arr itself is modified.
// For instance:

let arr = [1, 2, 15];
// the method orders the content of arr
arr.sort();
alert( arr ); // 1, 15, 2
// did you notice anything strange in the outcome?
// the items are sorted as strings by default.
// Literally, all elements are converted to strings for comparisons. For strings, lexicographic ordering is applied and indeed "2" > "15"
// To use our sorting order, we need to supply a function as the argument of arr.sort().
// the function should compare two arbitrary values and return:
function compare(a, b){
  if (a > b) return 1 // if the first value is greater than the second
  if (a == b) return 0 // if values are equal
  if (a < b) return -1 // if the first value is less than the second
}
// For instance, to sort as numbers:
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
let arr = [ 1, 2, 15 ];
arr.sort(compareNumeric);
alert(arr); // 1, 2, 15
// now it works as intended.

// reverse
// the method arr.reverse reverses the order of elements in arr.
// for instance: 
let arr = [1, 2, 3, 4, 5];
arr.reverse();
alert ( arr ); // 5, 4, 3, 2, 1
// it also returns the array arr after the reversal.

// split and join
// The str.split(delim) method splits the string into an array by the given delimiter delim.
// in the example below, we split by a comma followed by space.
let names = 'Bilbo, gandalf, Nazgul';
let arr = names.split(', ');
for (let name of arr){
  alert( `A message to ${name}.` ); // A message to Bilbo ( and other names )
}

// The split method has an optional second numeric argument - alemit on the array length. If it is provided, thenthe extra elements are ignored, In practice it is rarely used.
let arr = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);
alert(arr); // Bilbo, Gandalf

// Split into lettes
// the call to split(s) with an empty s would split the string into an array of letters:
let str = "test";
alert( str.split('')); // t,e,s,t

//the call arr.join(glue) does the reverse to split. it creates a string of arr items joined by glue between them.
// for instance:
let arr = ['Bilbo', 'Gandalf', 'Nazgul'];
let str = arr.join(';'); // glue the array into a string using;
alert( str ); // Bilbo;Gandalf;Nazgul

//reduce/reduceRight












