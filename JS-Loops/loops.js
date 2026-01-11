// 19 JS LOOPS Q solutions

// Q1 Count 1 to 20
console.log("Q1:")
let count=1;
for(count;count<=20;count++){
  console.log(count);
}


// Q2 sum of first 10 natural numbers(1 to 10)
console.log("Q2:");
let sum=0;
for(let i=1;i<=10;i++){
  sum=sum+i;
  
}
console.log(sum);

// Q3 Multiplication table of 5
console.log("Q3:");
let m=5;
for(let i=1;i<=10;i++){
   console.log(m+ " * "+ i +" = "+ m*i);
}


// Q4 Loop to print no from 1 to 100
console.log("Q4:");
for(let i=1; i<=100;i++)
{
  console.log(i);
}


// Q5 Sum of odd numbers between 1 and 100
console.log("Q5:");
let sum10=0;
for(let i=1; i<=100; i++)
{
  if(i % 2 !== 0){
    sum10 = sum10+i; 
  }
}
console.log(sum10);


// Q6 Count down from 20 to 1
console.log("Q6:");
for(let i=20; i>=1; i--){
  console.log(i);
}

// Q7 First ten multiple of 3
console.log("Q7:");
for(let i=1;i<=10;i++){
  console.log(3*i);
}

// Q8 Squares of each no from 1 to 10
console.log("Q8:");
for(let i = 1; i<=10; i++){
  console.log("Square of "+i+" = "+i**2);
}

// Q9 Sum of first 100 natural no(1 to 100)
console.log("Q9:");
let sum100=0;
for(let i=1; i<=100;i++){
  sum100 +=i;
}
console.log(sum100);


// Q10 Cube of each no from 1 to 5
console.log("Q10:");
for(let i =1; i<=5;i++){
  console.log("Cube of "+i+" = "+i**3);
}

// Q11 Print 50 to 1 
console.log("Q11:");
for(let i =50; i>=1; i--){
  console.log(i);
}

// Q12 Loop to print odd numbers from 19 to 1
console.log("Q12:");

for(let i=19;i>=1;i--){
  if(i % 2 !== 0){
    console.log(i);
  }

}

// Q13 Sum of first 5 odd numbers
console.log("Q13:");
let sum5 = 0;
let odd_count = 0;
for (let i = 1; odd_count < 5; i += 2) { // start at 1 (first odd number)
  sum5 += i;
  odd_count += 1;
}
console.log(sum5); // 25

// Q14 First 10 positive no
console.log("Q14:");
for(let i=1;i<=10;i++){
  console.log(i);

}

// Q15 Power of 2 from 2^1 to 2^10
console.log("Q15:");
for(let i=1; i<=10; i++){
  console.log("2^"+i+" = "+2**i);
}

// Q16 Sum of first 10 even number
console.log("Q16:")
let sum1=0;
let even_c=0;
for(let i=1 ;even_c<10;i++){
  if(i % 2 == 0){
    even_c++;
    sum1 +=i;
  }  
}
console.log(sum1);

// Q17 First 10 multiple of 4
console.log("Q17:");

for(let i = 1; i<=10; i++){
  console.log(4+" * "+i+" = " + 4*i);
}


// Q19 Counting even numbers from 30 to 10
console.log("Q19:");
for(let i =30; i>=10; i -=2){
  console.log(i);
}


// Q18 First five prime numbers
// no divisible by 1 and itself only, check upto sqrt of input value
console.log("Q18");
let sum_prime = 0;
let count_prime = 0;


for(let i=2; count_prime<5; i++)
{let isprime= true;

  for(let j=2; j<=Math.sqrt(i); j++)
  {if(i % j === 0 )
  {isprime = false;
    break;
  }
  }

  if(isprime){
  count_prime++;
  sum_prime += i;
  console.log(i);
}}

console.log("Sum of first 5 primes = " + sum_prime + ", count = " + count_prime);

