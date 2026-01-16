// Traversing in an array
  /* There are 4 main ways to traverse arrays: 3 loops and 1 method-based approach
    
      1. for loop   → classic loop using index
      2. for...in   → loops through indexes (keys) of the array
      3. for...of   → loops through values (elements) of the array
      4. forEach()  → higher-order function (HOF); 
                      takes a callback function as argument callback parameters order: (value, index, array)
  */
//

// Important Terms and their	Meaning
  /*
  First-class function	= A function where, functions are treated like values
  Higher-Order Function (HOF) =	A function that takes/returns another function
  Callback function	= Function passed into another function
  */
// 

//  JS 35 Array QS (Part 2) 
// Q1 const arr = [1, 2, 3, 4, 5]; WAP to print all elements using forEach().
const arr1 = [1, 2, 3, 4, 5];
arr1.forEach(function(values){
  console.log(values);
});


// Q2 . const nums = [10, 20, 30]; WAP to create a new array by adding 5 to each element using map().
const nums2 = [10, 20, 30];
let map_result2= nums2.map(function (value){
  return value+5;
});
console.log(map_result2);


// Q3 const arr = [5, 12, 18, 25, 40]; WAP to filter numbers greater than 20.
const arr3 = [5, 12, 18, 25, 40];
let filter_result3 = arr3.filter((values)=>{
 return values>20;
});
console.log(filter_result3)


// Q4  const values = [2, 4, 6, 8];WAP to find the sum of elements using reduce().
const values4 = [2, 4, 6, 8];
let reduce_result4 = values4.reduce((currentValue, nextValue)=>{
  return currentValue + nextValue;
});
console.log(reduce_result4);


// Q5 const data = [3, -1, 7, 0]; WAP to check if the array contains any negative number using some().
const data5 = [3, -1, 7, 0];
let some_result5 = data5.some((value)=>{

  return value<0;
});
console.log(some_result5);


// Q6 const arr = [5, 10, 15]; WAP to check whether all elements are greater than 0 using every().
const arr6 = [5, 10, 15];
let every_result6 = arr6.every(value=>{
return value>0;
});
console.log(every_result6);


// Q7  const arr = [12, 19, 25, 40];WAP to find the first element greater than 20 using find().
const arr7 = [12, 19, 25, 40];
let find_result7 = arr7.find((value) => value>20);
console.log(find_result7);

// arrow function written without {} by default returns result!!


// Q8 const arr = [7, 14, 21, 28];WAP to find the index of the first element divisible by 7
const arr8 = [7, 14, 21, 28];
let divisibleBy7 = arr8.find((value)=>{
  return value%7 === 0;
})
let value=arr8.indexOf(divisibleBy7);

console.log(value+", Index = "+ divisibleBy7);


// Q9  const colors = ["red", "blue", "green"];WAP to check if "blue" exists using includes().
const colors = ["red", "blue", "green"];
let has_blue = colors.includes('blue');
console.log(has_blue);


// Q10  const a = [1, 2]; const b = [3, 4];WAP to merge both arrays using spread operator
const a10 = [1, 2]; const b10 = [3, 4];
let spread_operator = [...a10,...b10];
console.log("Merged new array using spread operator = "+spread_operator);


// Q12 const nums = [9, 8, 7]; WAP to create a copy of the array using spread operator.
const nums12 = [9, 8, 7];
let nums12Copy = [...nums12]
console.log(nums12Copy);


// Q14  const arr = [45, 12, 78, 34]; WAP to sort the array in ascending order
const arr14 = [45, 12, 78, 34];
// sorting require use of compare function.

arr14.sort( (a,b)=>{
  return a-b;
});
console.log(arr14);


// Q15 const arr = [1, 2, 3, 4];WAP to reverse the array without modifying the origi
const arr15 = [1, 2, 3, 4];
let arr15_copy=[...arr15];
  //  to reverse
  arr15_copy.reverse();
console.log(arr15_copy);


// Q16 const arr = [10, 15, 20, 25];WAP to count even numbers using reduce()
const arr16 = [10, 15, 20, 25];

// reduce ko order of parameter are: accumulator, current value, current index, array
let countResult = arr16.reduce((accumulator,value)=>{
  if(value % 2 === 0){
    accumulator ++;
  }
  return accumulator;
},0)
console.log(countResult);


// Q20 const arr = [10, 20, 30, 40];WAP to remove element 30 using splice().
const arr20 = [10, 20, 30, 40];
arr20.splice(2,1);
console.log(arr20);


// Q22 const arr = [5, 10, 15, 20];WAP to calculate the average using reduce()
const arr22 = [5, 10, 15, 20];
let reduce_result22 = arr22.reduce((accumulator,currentValue)=>{

  let sum = accumulator+currentValue;
  
  return(sum);
},0)
console.log("Average calculated via reduce method = "+reduce_result22/(arr22.length))


// Q25 const arr = [4, 8, 12, 16];WAP to create a new array containing half of each element
const arr25 = [4, 8, 12, 16];
let arr25_new = arr25.map((value)=> value/2);
console.log("New halved array result = "+arr25_new);


// Q26 const arr = [1, 0, false, 5, "", 10];WAP to remove falsy values
const arr26 = [1, 0, false, 5, "", 10];
let arr26_cleaned = arr26.filter(value=>{
  if(value){
    return value;
  }
})
console.log("Falsy values removed array = "+arr26_cleaned);



// Q28 const arr = [10, 20, 30]; WAP to insert 25 at index 2 using splice()
const arr28 = [10, 20, 30];
arr28.splice(2,0,25)
console.log(arr28);


// Q29 const arr = [2, 4, 6, 8];WAP to check whether all elements are even
const arr29 = [2, 4, 6, 8];
let evenCheck = arr29.every(value=>{
  return value%2 ===0;
})
console.log(evenCheck);


// Q30 const arr = [1, 3, 5, 8];WAP to check if the array contains any even number.
const arr30 = [1, 3, 5, 8];
let anyevenCheck = arr30.some(value=>{
  return value % 2 === 0;
})
console.log(anyevenCheck);


// Q31 const arr = [1, 2, 3, 4, 5];WAP to create a new array of squares.
const arr31 = [1, 2, 3, 4, 5];
let arr31Result =  arr31.map(value=>{
  return value ** 2;
})
console.log(arr31Result);


// Q33 const arr = [5, 15, 25, 35];WAP to filter numbers between 10 and 30
const arr33 = [5, 15, 25, 35];
let arr33Result = arr33.filter(value=>{
  if(value >=10 && value<=30){
    return value;}
})
console.log("Numbers filtered between 10 and 30 = "+arr33Result);


// Q35 const arr = [1, 2, 3, 4]; WAP to find the product of all elements using reduce()
const arr35 = [1, 2, 3, 4];
let arr35Result = arr35.reduce((acc, value)=>{
  return acc* value

},1);
console.log(arr35Result);


// REMAINING QUESTIONS: Q11, Q13,Q17, Q18, Q19, Q21, Q23, Q24, Q27, Q32, Q34