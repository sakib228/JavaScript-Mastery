# 4. Operators

## 4.1 What is an Operator?

**English Definition:**  
An operator is a symbol that performs an operation on one or more operands.

**বাংলা ব্যাখ্যা:**  
Operator হলো এমন একটি symbol, যা কোনো value বা variable-এর উপর নির্দিষ্ট operation সম্পন্ন করে।

**Example:**
```javascript
let a = 10;
let b = 5;

console.log(a + b); // 15
```

এখানে:
* `+` = Operator
* `a`, `b` = Operands

---

## 4.2 Types of Operators

### A. Arithmetic Operators

| Operator | Meaning | Example | Result |
| :--- | :--- | :--- | :--- |
| **`+`** | Addition | `10 + 5` | `15` |
| **`-`** | Subtraction | `10 - 5` | `5` |
| **`*`** | Multiplication | `10 * 5` | `50` |
| **`/`** | Division | `10 / 5` | `2` |
| **`%`** | Modulus (Remainder) | `10 % 3` | `1` |
| **`**`** | Exponentiation | `2 ** 3` | `8` |
| **`++`** | Increment | `a++` | Increase by 1 |
| **`--`** | Decrement | `a--` | Decrease by 1 |

**Example:**
```javascript
let a = 10;
let b = 3;

console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.3333333333333335
console.log(a % b);  // 1
console.log(a ** b); // 1000
```

---

### B. Assignment Operators

| Operator | Example | Equivalent |
| :--- | :--- | :--- |
| **`=`** | `x = 10` | Assign `10` |
| **`+=`** | `x += 5` | `x = x + 5` |
| **`-=`** | `x -= 5` | `x = x - 5` |
| **`*=`** | `x *= 2` | `x = x * 2` |
| **`/=`** | `x /= 2` | `x = x / 2` |
| **`%=`** | `x %= 3` | `x = x % 3` |

**Example:**
```javascript
let x = 10;
x += 5;

console.log(x); // 15
```

---

### C. Comparison Operators

| Operator | Meaning |
| :--- | :--- |
| **`==`** | Equal (with type coercion) |
| **`===`** | Strict Equal |
| **`!=`** | Not Equal |
| **`!==`** | Strict Not Equal |
| **`>`** | Greater Than |
| **`<`** | Less Than |
| **`>=`** | Greater or Equal |
| **`<=`** | Less or Equal |

**Example:**
```javascript
console.log(10 == "10");  // true
console.log(10 === "10"); // false
console.log(20 > 10);     // true
```

> **Remember:** `===` value এবং data type দুটোই check করে।

---

### D. Logical Operators

| Operator | Meaning |
| :--- | :--- |
| **`&&`** | Logical AND |
| **`||`** | Logical OR |
| **`!`** | Logical NOT |

**Example:**
```javascript
let age = 22;
let hasID = true;

console.log(age >= 18 && hasID); // true
```

---

### E. Ternary Operator
এটি condition-এর উপর ভিত্তি করে দুইটি expression-এর মধ্যে একটি return করে।

**Syntax:**
```javascript
condition ? expression1 : expression2;
```

**Example:**
```javascript
let age = 20;
let result = age >= 18 ? "Adult" : "Minor";

console.log(result); // Adult
```

---

## Practice Questions

1. What is an operator?
2. What are operands?
3. Explain arithmetic operators.
4. What is the difference between `==` and `===`?
5. What is the difference between `=` and `==`?
6. Explain logical AND (`&&`) and OR (`||`).
7. What is the modulus (`%`) operator?
8. What is the ternary operator?

### Predict the Output

```javascript
console.log(10 + 5 * 2);   // 20
console.log(10 % 3);       // 1
console.log(5 ** 2);       // 25
console.log(10 == "10");   // true
console.log(10 === "10");  // false
console.log(true && false);// false
console.log(true || false);// true
```

### Coding Practice

1. Create a simple calculator.
2. Check whether a number is even or odd using `%`.
3. Calculate the area of a rectangle.
4. Convert Celsius to Fahrenheit.
5. Swap two numbers.
6. Find the largest of two numbers using comparison operators.
