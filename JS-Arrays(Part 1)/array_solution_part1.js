//  20 JS Arrays Qs (Part 1)

// Q1 a function that adds the number `7` at the end of the array  using  `push` method
let arr1 = [1, 2, 3, 4];
function add7(){
  arr1.push(7);
  console.log(arr1);
}
add7();


// Q2 Given `let arr = ['apple', 'banana']`, use the `pop` method to remove the last element. 
let arr2 = ['apple', 'banana'];
arr2.pop();
console.log(arr2)
// output: ['apple']


// Q3 Use the `shift` method to remove the first element from `let arr = [10, 20, 30, 40]`
let arr3 = [10, 20, 30, 40];
arr3.shift();
console.log(arr3);


// Q4 Write a function that adds `'start'` at the beginning of `let arr = ['middle', 'end']` using the `unshift` method.
let arr4 = ['middle', 'end'];
arr4.unshift('start');
console.log(arr4);


// Q5 Convert `let arr = ['one', 'two', 'three']` to a string using the `toString` method.
let arr5 = ['one', 'two', 'three'];
let str = arr5.toString();
console.log(str); 
//  Output: "one,two,three"


// Q6 Given `let arr = ['cat', 'dog']`, use the `concat` method to combine it with `['fish', 'bird']`.
let arr6 = ['cat', 'dog'];
let concat_result = arr6.concat('fish', 'bird');
console.log(concat_result);
// concat returns result in new array


// Q7  Use `slice` method to extract the first two elements from `let arr = ['red', 'green', 'blue']`
let arr7 = ['red', 'green', 'blue'];
let slice_arr7 = arr7.slice(0,2);
console.log(slice_arr7);


// Q8 Write function that removes the last element from `let arr = ['x', 'y', 'z']` and then adds `'a'` at the beginning using the `unshift` method.

let arr8 = ['x', 'y', 'z'];

// using arrow function
let edit8 =()=>{
  arr8.pop() // remove last element!
  arr8.unshift('a');
  console.log(arr8);
};
edit8(); // function call


// Q10  Write a function that uses the `push` method to add `'orange'` and `'grape'` to the end of let arr = ['apple', 'banana']
let arr10 = ['apple', 'banana'];
let new_fruit = (x)=>{
  arr10.push(x);
}

new_fruit('orange');
new_fruit('grape');

console.log(arr10);


// Q11 Use `shift` method to remove the first element from let arr = ['sun', 'moon', 'stars'] 
let arr11 = ['sun', 'moon', 'stars'] ;
arr11.shift();
console.log(arr11);


// Q12  Write a function that adds `42` at the beginning of `let arr = [7, 14, 21]` using the `unshift` method
let arr12 = [7, 14, 21];
let unshift_function = (x) =>{arr12.unshift(x)
  console.log(arr12);
};
unshift_function(42);


// Q13  Given `let arr = [5, 10, 15, 20]`, use the `pop` method to remove the last element and store it in a variable. 
let arr13 = [5, 10, 15, 20];
let poppedValue = arr13.pop();
console.log("Popped value = "+poppedValue);


// Q15 Use the `concat` method to combine `let arrA = ['x', 'y']` and `let arrB = [1, 2]`
let arrA = ['x', 'y'];
let arrB = [1, 2];

let result15 = arrA.concat(arrB);
console.log('Concatted result = '+result15);


// Q16  Write function that adds `99` at the end of `let arr = [1, 2, 3, 4]` using  `push` method, and then removes the first element using the`shift` method.
let operation = () => {
  let arr16 = [1, 2, 3, 4];
  arr16.push(99);
  arr16.shift();
  return arr16;
};
console.log("Result after push and shift ="+ operation());


// Q17 Use the `slice` method to extract the last two elements from `let arr = ['a', 'b', 'c', 'd']`

let arr17 = ['a', 'b', 'c', 'd'];
//  splice edits original array, slice returns in new array.

let slice_arr17 = arr17.slice(2,4);
console.log(slice_arr17);


// Q 18 Write a function that adds `'lion'` and `'tiger'` at the beginning of `let arr = ['elephant', 'giraffe']` using the `unshift` method. Also display length of array so formed.

let arr18 = ['elephant', 'giraffe'];

arr18.unshift('lion','tiger');
console.log(arr18);
console.log(" length of new array = "+ arr18.length);


// Q20 Use  `push` method to add `'grape'` to `let arr = ['apple', 'banana', 'orange']`, and then use the `pop` method to remove the last element.
let arr20 = ['apple', 'banana', 'orange'];
arr20.push('grape');
arr20.pop();
console.log(arr20);


// Bit weird Qs: Q9 Q14 Q19 

// Q9  Use the `toString` method to convert `let arr = [100, 200, 300]` to a string, and then find the length of the resulting string. 

let arr9 = [100, 200, 300];

let string_result = arr9.toString();
let length = string_result.length;

console.log(string_result);
console.log("Length ="+length);


// Q14  Convert `let arr = ['hello', 'world']` to a string using the `toString` method, and then split the string back into an array using `split(',')`

let arr14 = ['hello', 'world'];

// convert to string
let string_14 = arr14.toString();
console.log("Q14: " + string_14);  // Q14: hello,world

// split string back to array
let newArr14 = string_14.split(',');
console.log(newArr14);  // ["hello", "world"]


//  Q19  Convert `let arr = [20, 30, 40]` to a string using the `toString` method, and then convert the string back to an array using `split(',')

let arr19 = [20, 30, 40];

let string_19 = arr19.toString();
console.log("String converted : "+ string_19);

let back_to_array= string_19.split(',');

console.log(back_to_array);
