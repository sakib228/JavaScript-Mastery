// 1. Simple Calculator (if-else দিয়ে)
function calculator(a, b, op) {
  if (op === '+') return a + b;
  if (op === '-') return a - b;
  if (op === '*') return a * b;
  if (op === '/') return b !== 0 ? a / b : "Cannot divide by zero";
  return "Invalid operator";
}

// 2. Even or Odd
function isEvenOrOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

// 3. Area of Rectangle
function rectangleArea(length, width) {
  return length * width;
}

// 4. Celsius to Fahrenheit
function celsiusToFahrenheit(c) {
  return (c * 9/5) + 32;
}

// 5. Swap two numbers
function swap(a, b) {
  let temp = a;
  a = b;
  b = temp;
  return [a, b];
}
// Modern way: [a, b] = [b, a];

// 6. Largest of two numbers
function largest(a, b) {
  return a > b ? a : b;
}

// 7. Grading System
function getGrade(marks) {
  if (marks >= 80) return "A+";
  if (marks >= 70) return "A";
  if (marks >= 60) return "A-";
  if (marks >= 50) return "B";
  if (marks >= 40) return "C";
  if (marks >= 33) return "D";
  return "F";
}

// 8. Leap Year
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
// 9. Calculator using switch
function calculatorSwitch(a, b, op) {
  switch (op) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b !== 0 ? a / b : "Error";
    default: return "Invalid operator";
  }
}
// 10. Divisible by both 5 and 11
function divisibleBy5And11(num) {
  return num % 5 === 0 && num % 11 === 0;
}

// 11. Even numbers 1 to 50
function printEven() {
  for (let i = 2; i <= 50; i += 2) {
    console.log(i);
  }
}

// 12. Odd numbers 1 to 50
function printOdd() {
  for (let i = 1; i <= 50; i += 2) {
    console.log(i);
  }
}

// 13. Sum of 1 to 100
function sum1to100() {
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    sum += i;
  }
  return sum; // 5050
}

// 14. Multiplication table of 5
function tableOf5() {
  for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
  }
}
// 15. Factorial
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// 16. Reverse a number
function reverseNumber(num) {
  let rev = 0;
  while (num > 0) {
    rev = rev * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return rev;
}

// 17. Count digits
function countDigits(num) {
  if (num === 0) return 1;
  let count = 0;
  while (num > 0) {
    count++;
    num = Math.floor(num / 10);
  }
  return count;
}

// 18. Sum of digits
function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

// 19. Check Prime
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// 20. Fibonacci Series
function fibonacci(n) {
  let a = 0, b = 1;
  console.log(a);
  if (n > 1) console.log(b);
  
  for (let i = 3; i <= n; i++) {
    let next = a + b;
    console.log(next);
    a = b;
    b = next;
  }
}
