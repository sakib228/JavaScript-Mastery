5.  Type Conversion & Type Coercion
    5.1 Type Conversion
    English Definition:

Type conversion is the process of manually changing a value from one data type to another.

বাংলা ব্যাখ্যা:

যখন আমরা নিজেরা কোনো value-এর data type পরিবর্তন করি, তখন তাকে Type Conversion বলে।

Example:
let number = "100";

let convertedNumber = Number(number);

console.log(convertedNumber);
console.log(typeof convertedNumber);

Output:
100
number

Important Conversion Methods
Method Purpose
Number() Convert to number
String() Convert to string
Boolean() Convert to boolean
parseInt() Parse integer
parseFloat() Parse decimal number

Example:
console.log(Number("50"));
console.log(String(100));
console.log(Boolean(1));
console.log(parseInt("25.75"));
console.log(parseFloat("25.75"));

Output:
50
100
true
25
25.75

5.2 Type Coercion
English Definition:

Type coercion is the automatic conversion of one data type into another by JavaScript.

Example:
console.log("10" + 5);
console.log("10" - 5);
console.log("10" \* 2);

Output:
105
5
20

ব্যাখ্যা:

- "10" + 5 → String concatenation
- "10" - 5 → Number conversion
- "10" \* 2 → Number conversion
  Practice Questions

1. What is type conversion?
2. What is type coercion?
3. What is the difference between conversion and coercion?
4. What does Number() do?
5. What does parseInt() do?
6. What is the output of Boolean(0)?
7. What is the output of Number("Hello")?
   Predict the Output:
   console.log("5" + 5);
   console.log("5" - 2);
   console.log("10" \* "2");
   console.log(Number("Hello"));
   console.log(Boolean(""));
   console.log(Boolean("false"));
   console.log(parseInt("20.99"));
