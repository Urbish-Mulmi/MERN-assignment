// 20 JS-Function Qs Solved
// Q1 for loop to print 1 to 10

let see1to10 = ()=>{              //shorthand to define function
for(let i=1; i<=10;i++)
{console.log(i);}
}
see1to10();               //function call


// Q2 for loop to calculate and return sum of first n natural numbers;

function sum(n){
  let sum = 0;
  for(let i=1;i<=n;i++){
    sum += i;
  }
  return(sum);
}
let g =sum(5);
console.log("Sum of first N natural no = "+g);

// Q3 loop to print all even numbers between 1 and 20

function even(){
  console.log("Even numbers between 1 and 20:");
  for(let i = 1;i<=20; i++)
  {if (i % 2 == 0)
    {console.log(i);}
  }
}
even();


// Q4 function with loop to print odd no between 1 and 20

function odd(){
  console.log("Odd numbers between 1 and 20:");
  for(let i=1; i<=20; i++){
    if(i % 2 !== 0){
      console.log(i);
    }
  }
}
odd();

// Q5 function using loop to calculate and return factorial of a given number "n"

function factorial(n){
  let factorial_result= 1;
  for(let i=1;i<=n; i++){
   factorial_result = factorial_result*i;
  }
  return(factorial_result)
}
let a=factorial(9);
console.log("Factorial = "+a);


// Q6 function that uses a `for` loop to print the multiplication table of 5. 

function multiplication_tbl(n){
  console.log("Multiplication table of "+n);
  for( let i=1; i<=10; i++){
    console.log(n+ " * " + i +" = "+ n*i);
  }
}
multiplication_tbl(5)


// Q7  function that uses a `for` loop to print numbers from 10 to 1 in reverse order. 

function reverse(){
  for (let i = 10; i>=1; i--){
    console.log(i);
  }
}
reverse();


// Q8  function that uses a `for` loop to print all multiples of 3 between 1 and 30.

console.log("Q8");
function multiple_3(){
  console.log("Multiple of 3");
  for(let i =1;i<=30;i++){
    if(i % 3 === 0){
      console.log(i);
    }
  }
}
multiple_3();


// Q9  function that uses a `for` loop to calculate and return the sum of all even numbers between 1 and 50. 

function sum_even(){
  let result=0;
  for(let i=2;i<=50;i++){
    if(i % 2 == 0)
     { result = result+i;}
  }
  return(result);
}
console.log("Sum of 1 to 50 even numbers = "+sum_even());


// Q10 Sum of odd numbers between 1 and 50

function sum_odd(){
  let sum = 0;
  for(let i =1; i<=50; i++){
    if(i % 2 !== 0){
      sum += i;
    }
  }
  return sum;
}
console.log("Sum of 1 to 50 odd numbers = "+sum_odd());


// Q11 Numbers divisible by 5 (1 to 100)

function dividible_by_5(){
  for(let i=1; i<=100; i++){
    if( i % 5 === 0){
      console.log(i);
    }
  }
}
dividible_by_5();

// Q12 First 10 fibonacci numbers : 0 1 1 2 3 5....

let fibonacci=()=>{
console.log("Fibonacci series:-");
let n1=0;
let n2=1;
let n3=0;
console.log(n1);
console.log(n2);
for(let count=3;count<=10;count++){
  n3=n1+n2;
  console.log(n3);
  n1=n2;
  n2=n3;
}
}
fibonacci();


// Q13 Count no of digits in user given n-digit no.
//  Logic is:- /10 can be used to get count of digit from n digit no, /10 removes last digit of input no and via loop we can count digits

function countdigit(n) {
  let count = 0;
  for (; n > 0; n = Math.floor(n / 10)) {
    count++;
  }
  return count;
}
console.log("Numbers of digits= "+ countdigit(111)); 


// Q14 Squares of no from 1 to 10

function squares(){
  for(let i =1; i<=10; i++){
    console.log("Square of "+i+" = "+i**2);
  }
}
squares();


// Q15 Sum of squares of first n natural numbers

function sum_squares(n){
  let sum=0;
  for(let i=1;i<=n;i++){
    sum += i*i;
  }
  return sum;
}
console.log(sum_squares(5));


// Q16 Cube of numbers from 1 to 10

function print_cubes(){
  for(let i=1;i<=10;i++){
    console.log("Cube of "+i+" = "+ i**3);
  }
}
print_cubes();


// Q17 Smallest number >0 divisible by both 3 and 4

function find_no(){
  for(let i=1;;i++){
    if(i % 3 === 0 && i % 4 === 0){      
      return i;   
    }
  }
}
console.log(find_no()); // 12



// Q18 Loop to print first 10 even numbers

function print_even(){
  console.log("Even numbers:")
  let count = 0;
    for(let i=2;count<10;i++){
      if(i % 2 === 0){
        console.log(i);
        count++;
      }     
    }
  }
print_even();


// Q19 Numbers divisible by both 2 and 5 (1 to 100)

function divisibleBy2and5(){
  console.log(" Numbers divisible By 2 and 5:");
  for(let i = 1; i<=100;i++){
    if( i % 2 === 0 && i%5 === 0){
      console.log(i);
    }
  }
}
divisibleBy2and5();


// Q20 Sum of multiples of 3 or 5 below 100

function sumMultiple3or5(){
  let sum=0;
  console.log("Sum of multiples of 3 or 5 below 100:")
  for(let i = 1;i<100;i++){
    if(i % 3 === 0 || i % 5 ===0){
      sum+=i;
    }
  }
  return(sum);
}

console.log(sumMultiple3or5());