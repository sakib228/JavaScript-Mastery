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
