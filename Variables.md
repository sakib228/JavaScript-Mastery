2.  Variables (var, let, const)
    2.1 What is a Variable?
    English Definition:

A variable is a named container used to store data in a program.

বাংলা ব্যাখ্যা:

Variable হলো একটি নামযুক্ত container, যেখানে আমরা data store করে রাখতে পারি এবং প্রয়োজন অনুযায়ী ব্যবহার করতে পারি।

Example:
let name = "Sakib";
let age = 22;

console.log(name);
console.log(age);

Output:
Sakib
22

2.2 Variable Declaration
JavaScript-এ variable declare করার তিনটি keyword রয়েছে।
Keyword Reassign Redeclare Scope
var Yes Yes Function
let Yes No Block
const No No Block

A. var
var দিয়ে variable declare করা হয়।
var name = "Sakib";

name = "Rahim";

console.log(name);

Output:
Rahim

B. let
let দিয়ে এমন variable declare করা হয় যার value পরিবর্তন করা যাবে।
let age = 22;

age = 23;

console.log(age);

Output:
23

C. const
const দিয়ে এমন variable declare করা হয় যেটিকে পুনরায় assign করা যায় না।
const country = "Bangladesh";

console.log(country);

এটি Error দেবে:
const age = 22;

age = 23;

কারণ const variable reassign করা যায় না।
2.3 Important Concept
Declaration vs Initialization vs Assignment
let age; // Declaration

age = 22; // Assignment

let number = 10; // Declaration + Initialization

Block Scope Example
{
let age = 22;
const name = "Sakib";
var country = "Bangladesh";
}

console.log(country); // Bangladesh

console.log(age); // ReferenceError

কারণ let এবং const block-scoped, কিন্তু var function-scoped।
Common Mistakes

- const declare করার সময় value দিতে হয়।
- let এবং const একই scope-এ redeclare করা যায় না।
- var অপ্রত্যাশিত scope-related সমস্যা তৈরি করতে পারে।
- const object-এর property পরিবর্তন করা যায়, কিন্তু পুরো object পুনরায় assign করা যায় না।
  Example:
  const student = {
  name: "Sakib",
  age: 22
  };

student.age = 23;

console.log(student);

Output:
{ name: "SakIb", age: 23 }

Practice Questions
Basic

1. What is a variable?
2. What is the difference between var, let and const?
3. What is variable declaration?
4. What is initialization?
5. What is reassignment?
   Coding
6. Declare five variables using let.
7. Declare a constant named country.
8. Create two variables and swap their values.
9. What will be the output?
   let x = 10;
   x = 20;

console.log(x);

10. Find the error:
    const price = 100;
    price = 200;

console.log(price);
