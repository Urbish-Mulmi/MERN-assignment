// Complete solutions of 50 Conditional QS
// Q1  Age check with if else:
let age = 30;
if (age >= 18) { console.log("Adult"); }
else {
  console.log("Not an adult");
}

// Q2 Number sign(positive/negative)
let num = 30;
if (num > 0) { console.log("Positive"); }
else {
  console.log("Not positive");
}


//  Q3 Odd/Even
let n1 = 30;
if (n1 % 2 == 0) { console.log("Even"); }
else {
  console.log(" Odd");
}

// Q4 Vowel or Consonant
let a = "a";
if (a == "a" || a == "e" || a == "i" || a == "o" || a == "u")
  console.log("Vowel");

else { console.log("Consonant"); }

//  Q5 Check Zero
let n = 0;
if (n == 0)
  console.log("Zero");
else {
  console.log("Non zero")
}

// Q6 Multiple of five check 
let no = 6;
if (no % 5 == 0) {
  console.log("Multiple of 5");
}
else {
  console.log("Not multiple of 5")
}

//  Q7 Greater than 10 check
let number = 10;
if (number > 10) {
  console.log("greater than 10");
}

else {
  console.log("10 or else");
}

//  Q8 Check Equality
let n3 = 3;
let n2 = 4;

if (n3 == n2) { console.log("Equal"); }
else { console.log("Not Equal"); }

//  Q9 Check string length of (>5?) 
let string1 = "lovelyday";
if (string1.length > 5) { console.log("long") }
else {
  console.log("Not long");
}

//  Q 10 Check uppercase character
let ch = "C";
if (ch >= "A" && ch <= "Z") {
  console.log("Uppercase");
}
else {
  console.log("Lowercase");
}

// Q11 Check weekend
let day = 'saturday'
if (day == 'saturday') {
  console.log("Weekend")
}
else {
  console.log("Not weekend");
}

//  Q12 Check age
let agee = 3;
if (agee < 12) {
  console.log("Child");
}
else {
  console.log("Not a child");
}

// Q13 Check hot/cold (>30)
let temp = 3;
if (temp > 30) { console.log("Hot"); }
else {
  console.log("Cold");
}

// Q14 Number range
let numm = 990;
if (numm >= 1 && numm <= 100) {
  console.log("In range");
}
else { console.log("Out of range"); }

// Q15 Student's grade(>50)
let grade = 40;
if (grade > 50) { console.log("Pass"); }
else { console.log("Fail"); }

// Q16 Divisible by 3
let r = 3;
if (r % 3 == 0) { console.log("Divisible by 3"); }
else { console.log("Not divisible by 3"); }

// Q17 Morning or afternoon
let t = 4;
if (t < 12) {
  console.log("Morning");
}
else {
  console.log("Afternoon");

}

// Q18 Teenager age
let ageteen = 34;
if (ageteen > 13 && ageteen <= 19) {
  console.log("Teenager");
}
else {
  console.log("Not a teenager");
}

// Q19 String content check (requires using method name .includes("a"))
let str = "apple";
if (str.includes("a")) {
  console.log("string contains 'a'");
}
else {
  console.log("string do not contain 'a'");
}

// Q20 Leap year{algo: (DIVISIBLE BY 4 but not by 100 ) OR( DIVISIBLE BY 400) } 
let yr = 3;
if ((yr % 4 == 0 && yr % 100 != 0) || (yr % 400 == 0)){
  console.log("Leap year") 
}
else {
  console.log("Not a leap year")
}

// Q21 Either (negative) or (positive and zero)
let nos = 3;
if (nos < 0) {
  console.log("Negative");
}

else {
  console.log("Positive or zero");
}

// Q22 Password match check where password = my1234
let password = "my1234"
if (password === "my1234") {
  console.log("Access Granted");
}
else {
  console.log("Access Denied");
}


// Q23 Greater number
let no1=23;
let no2=26;
if(no1>no2){
  console.log("First is greater");
}

else{
  console.log("Second is greater");
}


// Q24 Prime Check
// if input_no is divisible only by 1 and itself that's prime number
// logic: divide input_no from[ n=2 to n=sqrt(input_no) ]
// if it is divisible then that is not a prime

let inp_no = 31;
let isPrime = true;

if (inp_no <= 1) {
    isPrime = false;
} else {
    for (let p = 2; p <= Math.floor(Math.sqrt(inp_no)); p++) {
        if (inp_no % p === 0) {
            isPrime = false;
            break; // stop the loop as soon as a factor is found
        }
    }
}

if (isPrime) {
    console.log(inp_no + " is a Prime number");
} else {
    console.log(inp_no + " is not a Prime number");
}

// Q25 Eligible for Discount(>65)
let disc_age = 23;
if (disc_age >= 65) {
  console.log("Eligible for senior discount");

}
else {
  console.log("Not eligible for discount");
}


// Q26 string comparision
let s1 = "hello";
let s2 = "hello";

if (s1 == s2) { console.log("Strings match"); }
else {
  console.log("String's don't match");
}


// Q27 Check if multiple of two
let mul=2;
if(mul%2 == 0 ){
  console.log("Multiple of two");
}
else{
  console.log("Not multiple of two");
}

// Q28 Liscence check(valid if >=18)
let age18=34;
if(age18>=18){
  console.log("Eligible");
}
else{
  console.log("Not eligible");
}


// Q29 Lowercase check
let string_low="QWERTY";
if(string_low >="a" && string_low<="z"){
  console.log("Lowercase string");
}
else{
  console.log("Not lowercase string")
}


// Q30 single digit check
let digit=9;

if(digit >=0 && digit<=9){
  console.log("Single digit");
}
else{
  console.log("Not a single digit");
}

// Q31 If else to check if no is divisible by 10
let n10=30;
if(n10 % 10 == 0 ){
  console.log("Divisible by 10");
}
else{
  console.log("Not divisible by 10");
}


// Q32 If else JS code to check if month number correpsonds to month with 31 days.If not display "Not 31 days"
let month_number = 4;
if(month_number === 1 || month_number === 3 ||month_number === 5 ||month_number === 7 ||month_number === 8 ||month_number === 10 || month_number === 12)
{
  console.log("The month has 31 days");
}
else{console.log("No 31 days in the month");}

// Q33 Password check(>8 charactes only valid)
let password_check="";
if(password_check.length>8){
  console.log("Password is valid")
}
else{
  console.log("Password is invalid, there must be more than 8 characters!!")
}

//Q 34 Check if no == 0 
let nozero=0;
if(nozero === 0){
  console.log("Zero");
}
else{console.log("Not zero");}

// Q35 Grade A(>90)
let gradeA=91;
if(gradeA>90){
  console.log("Grade A");
}
else{console.log("Less than Grade A");}

// Q36 Empty string check
let word= "  "
if(word.trim()=== "")
  // (use word.trim() method because JS considers any whitespace inside "" or '' as string) so it must be used to overcome this quirks of JS
  {
  console.log("Empty string");
}
else{
  console.log("Not empty");
}

// Q37 Multiple of 4
let mult4=7;
if(mult4 % 4 == 0){
  console.log("Multiple of 4");
}
else{
  console.log("Not a multiple of 4");
}

// Q38 Check if day is sunday
let day_sun="sunday";
if(day_sun === "sunday"){
  console.log("Sunday");
}
else{console.log("Not Sunday");}


// Q39 Check if  string starts with the letter “A”. Print “Starts with A” if true,else display “Does not start with A”
// use of .startsWith(" ") method

let inp_string="air"
if(inp_string.startsWith("A")){
  console.log("starts with A")
}

else{
  console.log(" Doesn't starts with A")
}

// Q40 Check for space in a string
// how to check for whitespaces?(=> via method .includes(" "))
let user_string="hello  and namaste"
if(user_string.includes(" ")){
  console.log("Contains space")
}
else{
  console.log("No space");
}



// Q41 Check if length of string is  even number(use of JS method)
let stringg="WELCOME"
if(stringg.length % 2 == 0 ){
console.log("Even length");
}
else{
  console.log("Odd length");
}

// Q42 Display above boiling point if temp>100, else below boiling point

let temp_celsius=200;
if(temp_celsius>100){
  console.log("Above boiling point");
}
else{
  console.log("Below boiling point");
}

// Q43 Display working hours if current time is between 9am to 5pm

let now = new Date();          // current date & time
let hour = now.getHours();     // get current hour in 24 hrs format(0–23)

let unit = hour>=12? "pm" : "am";  //find curernt unit(am or pm) from 24 hr format (hr>12 means pm)

if (hour >= 9 && hour < 17) {
  console.log("Working hours, current time = "+ (hour%12 || 12)+":"+now.getMinutes()+ unit);
  
  // (hour % 12 || 12)
  // hour % 12 converts 24‑hour time to 12‑hour time
  // For example: 17 % 12 → 5
  // If the result is 0 (midnight or noon), `|| 12` makes it 12 instead of 0
} 
else {
  console.log("Off hour " + (hour%12 || 12) + ":" + now.getMinutes()+ unit);
}


// Q44 BMI check(18.5 to 24.9 = healthy)
let bmi = 24;
if(bmi>=18.5 && bmi<=24.9){
  console.log("Healthy");
}
else{
  console.log("Not healthy");
}

// Q45 Check if number is odd or even
let user_number = 3;
if(user_number % 2 == 0){
  console.log("Even number");
}
else{
  console.log("Odd number");
}

// Q46 Check if character is digit between 0 to 9
let user_digit = "455" //string type
if(user_digit>=0 && user_digit<=9){
  console.log("Digit");
}
else{
  console.log("Not a digit");
}

// Q47 Check for exclamation at end of a string

let string_check="byebye!";

if(string_check.endsWith("!")){
  console.log("String ends with exclamation mark");
}
else{
  console.log("String does not end with exclamation mark");
}

// Q48 Weekday check
// implementing a .tolowercase(); method to normalize string

let current_day = "MONDAY";
let test_day = current_day.toLowerCase(); // normalize to lowercase

if (
  test_day === "monday" ||
  test_day === "tuesday" ||
  test_day === "wednesday" ||
  test_day === "thursday" ||
  test_day === "friday"
) {
  console.log("Weekday");
} else {
  console.log("Weekend");
}


// Q49 Check if a number is perfect square(i.e whether a number has square root or no)
// Done using JS method of Math.sqrt();

let test_no = 8;
let sqrt = Math.sqrt(test_no);

if(sqrt === Math.floor(sqrt)){
  console.log("Perfect square, it's square root = "+ Math.sqrt(test_no));
}
else{
  console.log("Not a perfect square");
}


// Q50 Temperature range check(if 15-25 celsisus display comfortable)

let celsius_temp = 34;
if(celsius_temp >= 15 && celsius_temp <= 25){
  console.log("Comfortable");
}
else{
  console.log("Not comfortable");
}

