# JavaScript Arrays

## 01. What is an Array?

**English Explanation:**  
An array is a special type of object in JavaScript that is used to store multiple values in a single variable. Each value in an array is called an **element**. Array elements can be accessed using their **index numbers**.

**সহজ বাংলা Explanation:**  
Array হলো JavaScript-এর একটি বিশেষ ধরনের data structure, যেখানে একটি variable-এর মধ্যে একাধিক value রাখা যায়। Array-এর প্রতিটি value-কে **element** বলা হয়। প্রতিটি element-এর একটি **index number** থাকে, যার মাধ্যমে আমরা সেই element access করতে পারি।

**Example:**
```javascript
const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);
```

**Expected Output:**
```text
[ 'Apple', 'Banana', 'Mango' ]
```

**Explanation:**  
এখানে:
* `fruits` হলো array variable
* `"Apple"` হলো প্রথম element
* `"Banana"` হলো দ্বিতীয় element
* `"Mango"` হলো তৃতীয় element

একটি array-এর মধ্যে একাধিক value রাখা হয়েছে।

---

## 02. Why Do We Use Arrays?

**English Explanation:**  
We use arrays to store and manage multiple related values in a single variable. Arrays help us:
1. Store multiple values
2. Organize data
3. Access elements easily
4. Reduce repetitive code
5. Work with loops and array methods

**সহজ বাংলা Explanation:**  
একাধিক related data আলাদা আলাদা variable-এ না রেখে একটি array-এর মধ্যে রাখা যায়। এতে data manage করা সহজ হয় এবং loop ব্যবহার করে অনেকগুলো data নিয়ে একসাথে কাজ করা যায়।

### Example Without Array
```javascript
const student1 = "Sakib";
const student2 = "Rahim";
const student3 = "Karim";

console.log(student1);
console.log(student2);
console.log(student3);
```

### Example With Array
```javascript
const students = ["Sakib", "Rahim", "Karim"];

console.log(students);
```

**Expected Output:**
```text
[ 'Sakib', 'Rahim', 'Karim' ]
```

> **Key Point:** Array ব্যবহার করলে related data একটি জায়গায় রাখা যায়।

---

## 03. How Does an Array Work?

**English Explanation:**  
An array stores multiple elements in an ordered collection. Each element has an index number. JavaScript arrays use **zero-based indexing**, which means the first element starts at index `0`.

**সহজ বাংলা Explanation:**  
Array-এর element-গুলো একটি নির্দিষ্ট order-এ থাকে। প্রতিটি element-এর index number থাকে। JavaScript-এ array indexing `0` থেকে শুরু হয়।

অর্থাৎ:
* প্রথম element → `index 0`
* দ্বিতীয় element → `index 1`
* তৃতীয় element → `index 2`

**Example:**
```javascript
const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
```

**Expected Output:**
```text
Apple
Banana
Mango
```

### Array Structure
```text
Array:   ["Apple", "Banana", "Mango"]

Index:      0         1         2
            |         |         |
Element:  Apple     Banana    Mango
```

### Important Concept
Array-এর শেষ element-এর index: `array.length - 1`

```javascript
const numbers = [10, 20, 30, 40];

console.log(numbers.length);
console.log(numbers.length - 1);
```

**Expected Output:**
```text
4
3
```

---

## 04. Array Syntax

### Basic Syntax
```javascript
const arrayName = [element1, element2, element3];
```

### Syntax Explanation

| Part | Explanation |
| :--- | :--- |
| **`const`** | Variable declare করার keyword |
| **`arrayName`** | Array-এর নাম |
| **`[ ]`** | Array তৈরি করার bracket |
| **`element1`** | Array-এর প্রথম value |
| **`,`** | Elements আলাদা করার separator |

### Examples

```javascript
// Standard Array
const numbers = [10, 20, 30, 40];

// Empty Array
const emptyArray = [];

// Array with Different Data Types
const mixedArray = ["Sakib", 25, true, null];
console.log(mixedArray);
```

**Expected Output:**
```text
[ 'Sakib', 25, true, null ]
```

> **Important Note:** JavaScript array-এর মধ্যে বিভিন্ন data type-এর value রাখা যায়। তবে বাস্তব project-এ related data একসাথে রাখা বেশি organized।

---

## 05. Basic Array Examples

### Example 1: Create an Array
```javascript
const colors = ["Red", "Green", "Blue"];

console.log(colors);
```

**Expected Output:**
```text
[ 'Red', 'Green', 'Blue' ]
```

### Example 2: Access Array Elements
```javascript
const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
```

**Expected Output:**
```text
Apple
Banana
Mango
```

### Example 3: Update Array Elements
```javascript
const fruits = ["Apple", "Banana", "Mango"];

fruits[1] = "Orange";

console.log(fruits);
```

**Expected Output:**
```text
[ 'Apple', 'Orange', 'Mango' ]
```

**Explanation:**  
এখানে `index 1`-এ থাকা `"Banana"` পরিবর্তন করে `"Orange"` করা হয়েছে। এভাবে `const` দিয়ে declare করা array-এরও ভেতরের element update করা যায়।

---

## 06. Array Length

**English Explanation:**  
The `length` property returns the total number of elements in an array.

**সহজ বাংলা Explanation:**  
Array-এর মধ্যে মোট কয়টি element আছে, তা জানার জন্য `length` property ব্যবহার করা হয়।

**Example:**
```javascript
const numbers = [10, 20, 30, 40, 50];

console.log(numbers.length);
```

**Expected Output:**
```text
5
```

### Example: Accessing the Last Element
```javascript
const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[fruits.length - 1]);
```

**Expected Output:**

## 07. Real-world Examples

### Example 1: Student Names
```javascript
const students = ["Sakib", "Rahim", "Karim", "Hasan"];

console.log(students);
```

**Expected Output:**
```text
[ 'Sakib', 'Rahim', 'Karim', 'Hasan' ]
```

> **Real-life Use Case:** School বা college-এর student list তৈরি করতে array ব্যবহার করা যায়।

### Example 2: Product List
```javascript
const products = ["Laptop", "Mobile", "Keyboard", "Mouse"];

console.log(products);
```

**Expected Output:**
```text
[ 'Laptop', 'Mobile', 'Keyboard', 'Mouse' ]
```

> **Real-life Use Case:** E-commerce website-এ product list store করতে array ব্যবহার করা হয়।

### Example 3: Student Marks
```javascript
const marks = [85, 90, 78, 92, 88];

console.log(marks);
```

**Expected Output:**
```text
[ 85, 90, 78, 92, 88 ]
```

> **Real-life Use Case:** Student-এর exam marks store এবং calculate করতে array ব্যবহার করা যায়।

### Example 4: Shopping Cart
```javascript
const cart = ["Shirt", "Shoes", "Watch"];

console.log(cart);
```

**Expected Output:**
```text
[ 'Shirt', 'Shoes', 'Watch' ]
```

> **Real-life Use Case:** Online shopping website-এ user-এর cart-এর products store করতে array ব্যবহার করা হয়।

---

## 08. Array Methods

JavaScript array-এর মধ্যে অনেক built-in method রয়েছে। এই method-গুলো array-এর data add, remove এবং manage করতে সাহায্য করে।

### 1. `push()`
Array-এর শেষে নতুন element যোগ করে।

```javascript
const fruits = ["Apple", "Banana"];

fruits.push("Mango");

console.log(fruits);
```

**Output:**
```text
[ 'Apple', 'Banana', 'Mango' ]
```

### 2. `pop()`
Array-এর শেষ element remove করে।

```javascript
const fruits = ["Apple", "Banana", "Mango"];

fruits.pop();

console.log(fruits);
```

**Output:**
```text
[ 'Apple', 'Banana' ]
```

### 3. `unshift()`
Array-এর শুরুতে নতুন element যোগ করে।

```javascript
const fruits = ["Banana", "Mango"];

fruits.unshift("Apple");

console.log(fruits);
```

**Output:**
```text
[ 'Apple', 'Banana', 'Mango' ]
```

### 4. `shift()`
Array-এর প্রথম element remove করে।

```javascript
const fruits = ["Apple", "Banana", "Mango"];

fruits.shift();

console.log(fruits);
```

**Output:**
```text
[ 'Banana', 'Mango' ]
```

### Summary

| Method | কাজ |
| :--- | :--- |
| **`push()`** | শেষে element যোগ করে |
| **`pop()`** | শেষে element remove করে |
| **`unshift()`** | শুরুতে element যোগ করে |
| **`shift()`** | শুরু থেকে element remove করে |

---

## 09. Loop with Arrays

**English Explanation:**  
Loops allow us to access and process array elements one by one.

**সহজ বাংলা Explanation:**  
Array-এর প্রতিটি element আলাদাভাবে access করার জন্য loop ব্যবহার করা যায়। এতে বারবার index লিখতে হয় না।

### Example: `for` Loop
```javascript
const fruits = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

**Expected Output:**
```text
Apple
Banana
Mango
```

**Explanation:**  
প্রথমে `i = 0`, তারপর `fruits[0]` থেকে `"Apple"` print হয়। এরপর `i`-এর value বাড়তে থাকে (`1`, `2`) এবং পরবর্তী element print হয়।

### Example: `for...of` Loop
```javascript
const fruits = ["Apple", "Banana", "Mango"];

for (const fruit of fruits) {
  console.log(fruit);
}
```

**Expected Output:**
```text
Apple
Banana
Mango
```

> **Important:** `for...of` loop array-এর প্রতিটি element সরাসরি access করতে সাহায্য করে।

---

## 10. Common Mistakes

### Mistake 1: Using Incorrect Index
```javascript
const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[3]);
```

**Output:**
```text
undefined
```

**Why?**  
Array-এর valid index হলো `0`, `1`, `2`। Index `3`-এ কোনো element নেই।

### Mistake 2: Forgetting Zero-based Indexing
```javascript
const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[1]);
```

**Output:**
```text
Banana
```

অনেকে মনে করে index `1` মানে প্রথম element। কিন্তু JavaScript-এ index `0` থেকে শুরু হয়।

### Mistake 3: Using `length` as Last Index
```javascript
const numbers = [10, 20, 30];

console.log(numbers[numbers.length]);
```

**Output:**
```text
undefined
```

**Correct:**
```javascript
console.log(numbers[numbers.length - 1]);
```

**Output:**
```text
30
```

### Mistake 4: Confusing Array and String
```javascript
const fruits = "Apple, Banana, Mango";

console.log(fruits[0]);
```

**Output:**
```text
A
```

এটি array নয়, string।

**Correct:**
```javascript
const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]);
```

**Output:**
```text
Apple
```

### Mistake 5: Reassigning a `const` Array
```javascript
const numbers = [10, 20, 30];

numbers = [40, 50, 60];
```

**Output:**
```text
TypeError
```

কারণ `const` variable-কে নতুন array দিয়ে reassign করা যায় না। তবে array-এর element পরিবর্তন করা যায়।

**Correct:**
```javascript
const numbers = [10, 20, 30];

numbers[0] = 100;

console.log(numbers);
```

**Output:**
```text
[ 100, 20, 30 ]
```
```text
Mango
```

**Explanation:**  
Array-এর `length` হলো `3`। তাই শেষ index: `3 - 1 = 2`, এবং `fruits[2]` এর ফলাফল হলো `"Mango"`।
