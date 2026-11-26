01. What is a Function?

English Explanation :

A function is a reusable block of code designed to perform a specific task.
We can define a function once and execute it whenever we need by calling it.

সহজ বাংলা Explanation :

Function হলো JavaScript-এর একটি reusable code block, যা নির্দিষ্ট কোনো কাজ সম্পন্ন করার জন্য তৈরি করা হয়।
একবার function তৈরি করে আমরা সেটিকে বারবার ব্যবহার করতে পারি।
যেমন:

দুইটি সংখ্যা যোগ করা
User-এর নাম দেখানো
কোনো পণ্যের দাম calculate করা

Login validation করা
---------------------------
02. Why Do We Use Functions?

English Explanation
We use functions to make our code:
Reusable
Organized
Easy to understand
Easy to maintain
Less repetitive

সহজ বাংলা Explanation
Function ব্যবহার করার প্রধান কারণ হলো একই code বারবার না লিখে একবার লিখে অনেকবার ব্যবহার করা।
এতে আমাদের code ছোট, পরিষ্কার এবং maintain করা সহজ হয়।

Example Without Function
---------------------------

console.log(10 + 20);
console.log(30 + 40);
console.log(50 + 60);

Example With Function
----------------------------

function addNumbers(a, b) {
  console.log(a + b);
}

addNumbers(10, 20);
addNumbers(30, 40);
addNumbers(50, 60);

Expected Output

30
70
110

Key Point: Function helps us follow the DRY principle.

DRY = Don't Repeat Yourself.

-------------------------------
03. How Does a Function Work?

English Explanation :

A function generally works through three steps:

Function Declaration
Function Calling
Function Execution

সহজ বাংলা Explanation :

Function কাজ করার জন্য সাধারণত তিনটি ধাপ থাকে।

Step 1: Function তৈরি করা :

function greet() {
  console.log("Hello!");
}

এখানে আমরা greet নামে একটি function তৈরি করেছি।
কিন্তু এখনো function execute হয়নি।

Step 2: Function Call করা :

greet();

এখন function-টিকে call করা হয়েছে।

Step 3: Function Execute হওয়া :

console.log("Hello!");

Function call হওয়ার পর এর ভেতরের code execute হবে।
Expected Output :

Hello!

Important Concept :

Function declaration করলেই function execute হয় না।
Function execute করার জন্য সাধারণত function call করতে হয়।

04. Function Syntax :

Basic Syntax :
--------------
function functionName(parameters) {
  // Code to execute
}

Syntax Explanation :
--------------------

Part

Explanation
- function
-Function তৈরি করার keyword
-functionName
-Function-এর নাম
-parameters
-Function-এর input variables
{ }
-Function body
-function call
-Function execute করার জন্য call

Example :

function sayHello() {
  console.log("Hello JavaScript");
}

sayHello();

Expected Output :

Hello JavaScript

------------------------------
05. Basic Function Example

Example 1: Simple Function

function welcome() {
  console.log("Welcome to JavaScript!");
}

welcome();

Expected Output :
Welcome to JavaScript!

Example 2: Function with Parameters

function greet(name) {
  console.log("Hello " + name);
}

greet("Sakib");

Expected Output :
Hello Sakib

Explanation :
এখানে:
name হলো parameter

"Sakib" হলো argument
Function call করার সময় argument-এর value parameter-এর মধ্যে চলে যায়।

----------------------------
06. Parameters and Arguments

English Explanation :

A parameter is a variable defined in a function declaration.
An argument is the actual value passed to a function when calling it.

সহজ বাংলা Explanation :

Function তৈরি করার সময় যে variable ব্যবহার করা হয় সেটি হলো parameter।
Function call করার সময় যে value পাঠানো হয় সেটি হলো argument।

Example :

function add(a, b) {
console.log(a + b);
}

add(10, 20);

Expected Output :
30

Understanding ~

function add(a, b)

Here, a and b are parameters.
add(10, 20);
Here, 10 and 20 are arguments.
