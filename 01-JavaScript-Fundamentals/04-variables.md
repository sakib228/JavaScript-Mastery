# 2. Variables (`var`, `let`, `const`)

## 2.1 What is a Variable?

**English Definition:**  
A variable is a named container used to store data in a program.

**বাংলা ব্যাখ্যা:**  
Variable হলো একটি নামযুক্ত container, যেখানে আমরা data store করে রাখতে পারি এবং প্রয়োজন অনুযায়ী ব্যবহার করতে পারি।

**Example:**
```javascript
let name = "Sakib";
let age = 22;

console.log(name);
console.log(age);
```

**Output:**
```text
Sakib
22
```

---

## 2.2 Variable Declaration

JavaScript-এ variable declare করার তিনটি keyword রয়েছে।

| Keyword | Reassign | Redeclare | Scope |
| :--- | :--- | :--- | :--- |
| **`var`** | Yes | Yes | Function |
| **`let`** | Yes | No | Block |
| **`const`** | No | No | Block |

### A. `var`
`var` দিয়ে variable declare করা হয়। এটি reassign এবং একই scope-এ redeclare করা যায়।

```javascript
var name = "Sakib";
name = "Rahim";

console.log(name); // Rahim
```

### B. `let`
`let` দিয়ে এমন variable declare করা হয় যার value পরিবর্তন (reassign) করা যায়, কিন্তু একই scope-এ পুনরায় declare করা যায় না।

```javascript
let age = 22;
age = 23;

console.log(age); // 23
```

### C. `const`
`const` দিয়ে এমন variable declare করা হয় যেটিকে পুনরায় assign করা যায় না।

```javascript
const country = "Bangladesh";
console.log(country); // Bangladesh
```

নিচের কোডটি **Error** দেবে, কারণ `const` variable reassign করা যায় না:

```javascript
const age = 22;
age = 23; // TypeError: Assignment to constant variable.
```

---

## 2.3 Important Concepts

### Declaration vs Initialization vs Assignment
```javascript
let age;          // Declaration
age = 22;         // Assignment
let number = 10;  // Declaration + Initialization
```

### Block Scope Example
```javascript
{
  let age = 22;
  const name = "Sakib";
  var country = "Bangladesh";
}

console.log(country); // Bangladesh
console.log(age);     // ReferenceError: age is not defined
```
> কারণ `let` এবং `const` হলো **block-scoped**, কিন্তু `var` হলো **function-scoped** (block-এর বাইরে থেকেও access করা যায়)।

### `const` with Objects
`const` object-এর property পরিবর্তন করা যায়, কিন্তু পুরো object পুনরায় assign করা যায় না।

```javascript
const student = {
  name: "Sakib",
  age: 22
};

student.age = 23;
console.log(student); // { name: "Sakib", age: 23 }
```

### Common Mistakes
* `const` declare করার সময় initial **value** দিতে হয় (`const x;` লিখলে `SyntaxError` আসবে)।
* `let` এবং `const` একই scope-এ redeclare করা যায় না।
* `var` অপ্রত্যাশিত scope বা hoisting-related সমস্যা তৈরি করতে পারে, তাই আধুনিক JavaScript-এ `const` এবং `let` ব্যবহার করাই ভালো।

---

## Practice Questions

### Basic
1. What is a variable?
2. What is the difference between `var`, `let`, and `const`?
3. What is variable declaration?
4. What is initialization?
5. What is reassignment?

### Coding
6. Declare five variables using `let`.
7. Declare a constant named `country`.
8. Create two variables and swap their values.
9. What will be the output?
   ```javascript
   let x = 10;
   x = 20;
   console.log(x);
   ```
10. Find the error:
    ```javascript
    const price = 100;
    price = 200;
    console.log(price);
    ```
