# 10. Error Handling Basics

## 10.1 What is an Error?

**English Definition:**  
An error is a problem that occurs during program execution and prevents the program from behaving as expected.

**বাংলা ব্যাখ্যা:**  
Code লেখার সময় কোনো ভুলের কারণে program সঠিকভাবে কাজ না করলে সেটিকে **Error** বলা হয়।

---

## 10.2 Common Types of Errors

| Error | Meaning |
| :--- | :--- |
| **`SyntaxError`** | Incorrect syntax |
| **`ReferenceError`** | Accessing an undefined identifier |
| **`TypeError`** | Invalid operation on a value |
| **`RangeError`** | Value outside an allowed range |

### A. `SyntaxError`
```javascript
console.log("Hello"
```
> এখানে closing parenthesis `)` নেই।

### B. `ReferenceError`
```javascript
console.log(username);
```
> যদি `username` declare করা না থাকে, তাহলে `ReferenceError` হবে।

### C. `TypeError`
```javascript
let age = null;

age.toUpperCase();
```
> এখানে `null`-এর উপর string method ব্যবহার করা হয়েছে।

---

## 10.3 `try...catch` Introduction

Error হলে program-কে gracefully handle করার জন্য `try...catch` ব্যবহার করা হয়।

```javascript
try {
  let result = unknownVariable;
  console.log(result);
} catch (error) {
  console.log("An error occurred:", error.message);
}
```

**Output:**
```text
An error occurred: unknownVariable is not defined
```

> এই topic-এর বিস্তারিত আলোচনা আমরা **Phase 05**-এর **Asynchronous JavaScript**-এ করব।

---

## Practice Questions

1. What is an error?
2. What is `SyntaxError`?
3. What is `ReferenceError`?
4. What is `TypeError`?
5. What is `try...catch`?
6. Why is error handling important?

### Coding Practice

7. Write code that produces a `ReferenceError`.
8. Write code that produces a `TypeError`.
9. Handle an error using `try...catch`.
10. Create a function that safely converts a value into a number.
