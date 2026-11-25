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
