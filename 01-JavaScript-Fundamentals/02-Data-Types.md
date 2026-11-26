3.  Data Types
    3.1 What is a Data Type?
    English Definition:

A data type defines the type of value that a variable can store.

বাংলা ব্যাখ্যা:

Data Type নির্ধারণ করে একটি variable-এর মধ্যে কী ধরনের data রাখা হয়েছে।

Example:
let name = "Sakib";
let age = 22;
let isStudent = true;

এখানে তিন ধরনের data রয়েছে।
3.2 JavaScript Data Types
JavaScript-এ data types প্রধানত দুই ভাগে বিভক্ত।
Data Types
|
|---- Primitive
|
|---- Non-Primitive

A. Primitive Data Types
Data Type Example
String "Sakib"
Number 100, 10.5
Boolean true, false
Undefined undefined
Null null
BigInt 123n
Symbol Symbol("id")

Example:
let name = "Sakib";
let age = 22;
let price = 99.5;
let isStudent = true;
let result;
let data = null;
let bigNumber = 12345678901234567890n;

console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof result);
console.log(typeof data);

Output:
string
number
boolean
undefined
object

Important: typeof null এর output object আসে। এটি JavaScript-এর একটি historical behavior, null আসলে object নয়।
B. Non-Primitive Data Types
Type Example
Object {name: "Sakib"}
Array `[10, 20, 30]
Function function() {}

Example:
let student = {
name: "Sakib",
age: 22
};

let numbers = [10, 20, 30];

function greet() {
console.log("Hello");
}

console.log(typeof student);
console.log(typeof numbers);
console.log(typeof greet);

Output:
object
object
function

3.3 Dynamic Typing
JavaScript is a dynamically typed language.

অর্থাৎ, একটি variable-এর value পরিবর্তন করলে তার data type-ও পরিবর্তন হতে পারে।
let value = 100;

console.log(typeof value);

value = "Hello";

console.log(typeof value);

Output:
number
string

Practice Questions

1. What is a data type?
2. How many categories of data types are there?
3. What are primitive data types?
4. What are non-primitive data types?
5. What is dynamic typing?
6. What is the difference between null and undefined?
7. What is the output of typeof null?
8. What is BigInt?
9. What is Symbol?
10. What is the difference between primitive and non-primitive data types?
    Coding Practice:
11. Declare variables using all seven primitive data types.
12. Create an object containing student information.
13. Create an array containing five numbers.
14. Check the data type of ten different values using typeof.
