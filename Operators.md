4.  Operators
    4.1 What is an Operator?
    English Definition:

An operator is a symbol that performs an operation on one or more operands.

বাংলা ব্যাখ্যা:

Operator হলো এমন একটি symbol, যা কোনো value বা variable-এর উপর নির্দিষ্ট operation সম্পন্ন করে।

Example:
let a = 10;
let b = 5;

console.log(a + b);

এখানে:

- - = Operator
- a, b = Operands
  4.2 Types of Operators
  A. Arithmetic Operators
  Operator Meaning Example Result

* Addition 10 + 5 15

- Subtraction 10 - 5 5

* Multiplication 10 \* 5 50
  / Division 10 / 5 2
  % Modulus 10 % 3 1
  ** Exponentiation 2 ** 3 8
  ++ Increment a++ Increase by 1
  -- Decrement a-- Decrease by 1

Example:
let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a \* b);
console.log(a / b);
console.log(a % b);
console.log(a \*\* b);

Output:
13
7
30
3.3333333333333335
1
1000

B. Assignment Operators
Operator Example Equivalent
= x = 10 Assign 10
+= x += 5 x = x + 5
-= x -= 5 x = x - 5
_= x _= 2 x = x \* 2
/= x /= 2 x = x / 2
%= x %= 3 x = x % 3

Example:
let x = 10;

x += 5;

console.log(x);

Output:
15

C. Comparison Operators
Operator Meaning
== Equal (with type coercion)
=== Strict Equal
!= Not Equal
!== Strict Not Equal

>     Greater Than
>
> < Less Than
> = Greater or Equal
> <= Less or Equal

Example:
console.log(10 == "10");
console.log(10 === "10");
console.log(20 > 10);

Output:
true
false
true

Remember: === value এবং data type দুটোই check করে।
D. Logical Operators
Operator Meaning
&& AND
|| OR
! NOT

Example:
let age = 22;
let hasID = true;

console.log(age >= 18 && hasID);

Output:
true

E. Ternary Operator
এটি condition-এর উপর ভিত্তি করে দুইটি expression-এর মধ্যে একটি return করে।

Syntax:
condition ? expression1 : expression2;

Example:
let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);

Output:
Adult

Practice Questions

1. What is an operator?
2. What are operands?
3. Explain arithmetic operators.
4. What is the difference between == and ===?
5. What is the difference between = and ==?
6. Explain logical AND and OR.
7. What is the modulus operator?
8. What is the ternary operator?
   Predict the Output:
   console.log(10 + 5 \* 2);
   console.log(10 % 3);
   console.log(5 \*\* 2);
   console.log(10 == "10");
   console.log(10 === "10");
   console.log(true && false);
   console.log(true || false);

Coding Practice:

1. Create a simple calculator.
2. Check whether a number is even or odd using %.
3. Calculate the area of a rectangle.
4. Convert Celsius to Fahrenheit.
5. Swap two numbers.
6. Find the largest of two numbers using comparison operators.
