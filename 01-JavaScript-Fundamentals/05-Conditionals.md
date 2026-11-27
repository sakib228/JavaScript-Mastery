# 6. Conditional Statements

## 6.1 What is a Conditional Statement?

**English Definition:**  
Conditional statements are used to execute different blocks of code based on specific conditions.

**বাংলা ব্যাখ্যা:**  
কোনো condition সত্য (`true`) অথবা মিথ্যা (`false`) হওয়ার উপর নির্ভর করে আলাদা আলাদা code execute করার জন্য **Conditional Statement** ব্যবহার করা হয়।

---

## 6.2 Types of Conditional Statements

### A. `if` Statement
```javascript
let age = 20;

if (age >= 18) {
  console.log("You are eligible.");
}

// Output:
// You are eligible.
```

### B. `if-else` Statement
```javascript
let age = 16;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// Output:
// Minor
```

### C. `if-else-if` Statement
```javascript
let marks = 85;

if (marks >= 80) {
  console.log("A+");
} else if (marks >= 70) {
  console.log("A");
} else if (marks >= 60) {
  console.log("A-");
} else {
  console.log("Fail");
}

// Output:
// A+
```

### D. `switch` Statement
একাধিক নির্দিষ্ট value-এর মধ্যে matching value খুঁজতে `switch` ব্যবহার করা যায়।

```javascript
let day = 3;

switch (day) {
  case 1:
    console.log("Sunday");
    break;

  case 2:
    console.log("Monday");
    break;

  case 3:
    console.log("Tuesday");
    break;

  default:
    console.log("Invalid Day");
}

// Output:
// Tuesday
```

> **Important:** `break` না দিলে পরবর্তী `case`-গুলোতেও execution চলতে পারে (**fall-through**)।

---

## Practice Questions

1. What is a conditional statement?
2. Explain `if` and `if-else`.
3. What is the difference between `if-else` and `switch`?
4. What is the purpose of `break`?
5. What is the `default` case?

### Coding Practice

6. Check whether a number is positive, negative, or zero.
7. Check whether a person is eligible to vote.
8. Find the largest among three numbers.
9. Create a grading system using marks.
10. Check whether a year is a leap year.
11. Build a simple calculator using `switch`.
12. Check whether a number is divisible by both `5` and `11`.
