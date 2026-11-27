# 9. Template Literals

## 9.1 What are Template Literals?

**English Definition:**  
Template literals are a way to create strings using backticks (`` ` ``), allowing embedded expressions and multiline strings.

**বাংলা ব্যাখ্যা:**  
Template Literals ব্যবহার করে string-এর মধ্যে সরাসরি variable বা expression ব্যবহার করা যায়।

**Example:**
```javascript
let name = "Sakib";
let age = 22;

console.log(`My name is ${name} and I am ${age} years old.`);
```

**Output:**
```text
My name is Sakib and I am 22 years old.
```

---

## 9.2 Normal Strings vs Template Literals

### Without Template Literals
```javascript
let name = "Sakib";

console.log("Hello " + name); // Hello Sakib
```

### With Template Literals
```javascript
let name = "Sakib";

console.log(`Hello ${name}`); // Hello Sakib
```

---

## 9.3 Key Features

### Multiline String
Backtick (`` ` ``) ব্যবহার করলে `\n` ছাড়াই সহজে একাধিক লাইনের string লেখা যায়।

```javascript
let message = `Welcome to JavaScript.
Learn.
Practice.
Build.`;

console.log(message);
```

### Expression Inside Template Literal
`${}` এর ভেতরে শুধু variable নয়, যেকোনো valid JavaScript expression বা calculation লেখা যায়।

```javascript
let a = 10;
let b = 20;

console.log(`Sum = ${a + b}`);
```

**Output:**
```text
Sum = 30
```

---

## Practice Questions

1. What are template literals?
2. Which symbol is used for template literals?
3. What is the purpose of `${}`?
4. What is the difference between normal strings and template literals?
5. How can we create multiline strings?

### Coding Practice

6. Print your name and age using template literals.
7. Generate a student information card.
8. Calculate two numbers inside a template literal.
9. Create a product description using variables.
