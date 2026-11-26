7.  Loops
    7.1 What is a Loop?
    English Definition:

A loop is a programming structure that executes a block of code repeatedly while a specified condition is true.

বাংলা ব্যাখ্যা:

একই code বারবার execute করার জন্য Loop ব্যবহার করা হয়।

উদাহরণ: ১ থেকে ১০০ পর্যন্ত সংখ্যা print করতে ১০০টি console.log লেখার প্রয়োজন নেই। Loop ব্যবহার করলেই হবে।
7.2 Types of Loops
A. for Loop
Syntax:
for (initialization; condition; update) {
// Code
}

Example:
for (let i = 1; i <= 5; i++) {
console.log(i);
}

Output:
1
2
3
4
5

ব্যাখ্যা:
Step Meaning
let i = 1 Initialization
i <= 5 Condition
i++ Update
console.log(i) Code Execution

B. while Loop
যতক্ষণ condition true থাকবে, ততক্ষণ loop চলবে।
let i = 1;

while (i <= 5) {
console.log(i);
i++;
}

C. do-while Loop
এখানে code অন্তত একবার execute হবে, তারপর condition check হবে।
let i = 1;

do {
console.log(i);
i++;
} while (i <= 5);

D. Nested Loop
একটি loop-এর ভিতরে অন্য loop থাকলে তাকে Nested Loop বলে।
for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 3; j++) {

        console.log(i, j);

    }

}

Practice Questions

1. What is a loop?
2. Why do we use loops?
3. What are the three main parts of a for loop?
4. What is the difference between for and while?
5. What is the difference between while and do-while?
6. What is an infinite loop?
7. What is a nested loop?
   Coding Practice:
8. Print numbers from 1 to 100.
9. Print even numbers from 1 to 50.
10. Print odd numbers from 1 to 50.
11. Calculate the sum of numbers from 1 to 100.
12. Print the multiplication table of 5.
13. Calculate the factorial of a number.
14. Reverse a number.
15. Count the digits of a number.
16. Find the sum of digits.
17. Check whether a number is prime.
18. Generate a Fibonacci series.
19. Print this pattern:

- \*\*
  ***
  ***
  ***
