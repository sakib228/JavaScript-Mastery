01. What is a Function?

English Explanation

A function is a reusable block of code designed to perform a specific task.
We can define a function once and execute it whenever we need by calling it.
সহজ বাংলা Explanation

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
