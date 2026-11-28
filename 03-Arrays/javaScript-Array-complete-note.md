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
এখানে `index 1`-এ থাকা `"Banana"` পরিবর্তন করে `"Orange"` করা হয়েছে। Array-এর element update করা যায়।

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
```text
Mango
```

**Explanation:**  
Array-এর `length` হলো `3`। তাই শেষ index: `3 - 1 = 2`, এবং `fruits[2]` এর ফলাফল হলো `"Mango"`।

---

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
প্রথমে `i = 0`, তারপর `fruits[0]` থেকে `"Apple"` print হয়। এরপর `i`-এর value বাড়তে থাকে এবং পরবর্তী element print হয়।

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

---

## 11. Interview Questions

### Q1. What is an array in JavaScript?
* **English:** An array is a special object used to store multiple values in a single variable.
* **বাংলা:** Array হলো JavaScript-এর একটি special object, যেখানে একটি variable-এর মধ্যে একাধিক value রাখা যায়।

### Q2. Why do we use arrays?
* **English:** Arrays help us store, organize, and manage multiple related values efficiently.
* **বাংলা:** একাধিক related data একসাথে store এবং manage করার জন্য array ব্যবহার করা হয়।

### Q3. What is array indexing?
* **English:** Array indexing is the process of accessing elements using their index numbers.
* **বাংলা:** Index number ব্যবহার করে array-এর element access করাকে array indexing বলে।

### Q4. What is zero-based indexing?
* **English:** Zero-based indexing means the first element starts at index `0`.
* **বাংলা:** Zero-based indexing মানে array-এর প্রথম element-এর index `0`।

### Q5. What is the `length` property?
* **English:** The `length` property returns the number of elements in an array.
* **বাংলা:** `length` property array-এর মোট element সংখ্যা return করে।

### Q6. Can an array store different data types?
* **English:** Yes, JavaScript arrays can store values of different data types.
* **বাংলা:** হ্যাঁ, JavaScript array-এর মধ্যে বিভিন্ন data type-এর value রাখা যায়।

### Q7. What is the difference between `push()` and `pop()`?
* **English:** `push()` adds elements to the end of an array, while `pop()` removes the last element.
* **বাংলা:** `push()` array-এর শেষে element যোগ করে এবং `pop()` শেষ element remove করে।

### Q8. What happens when we access an invalid array index?
* **English:** Accessing an index that has no element usually returns `undefined`.
* **বাংলা:** Array-এর এমন index access করলে যেখানে কোনো element নেই, সাধারণত `undefined` পাওয়া যায়।

---

## 12. Practice Problems

### Beginner Level

#### Problem 1: Create an Array
Create an array named `fruits` containing: `Apple`, `Banana`, `Mango`. Print the array.
```text
Expected Output:
[ 'Apple', 'Banana', 'Mango' ]
```

#### Problem 2: Access Array Elements
Create an array:
```javascript
const colors = ["Red", "Green", "Blue"];
```
Print the elements:
* First element
* Second element
* Third element
```text
Expected Output:
Red
Green
Blue
```

#### Problem 3: Find Array Length
Create an array containing five numbers. Print the total number of elements.
```text
Expected Output:
5
```

#### Problem 4: Update an Array
Given:
```javascript
const fruits = ["Apple", "Banana", "Mango"];
```
Change `"Banana"` to `"Orange"`.
```text
Expected Output:
[ 'Apple', 'Orange', 'Mango' ]
```

---

### Intermediate Level

#### Problem 5: Add an Element
Given:
```javascript
const numbers = [10, 20, 30];
```
Add `40` to the end of the array using `push()`.
```text
Expected Output:
[ 10, 20, 30, 40 ]
```

#### Problem 6: Remove the Last Element
Given:
```javascript
const fruits = ["Apple", "Banana", "Mango"];
```
Remove the last element using `pop()`.
```text
Expected Output:
[ 'Apple', 'Banana' ]
```

#### Problem 7: Print Array Elements
Given:
```javascript
const numbers = [10, 20, 30, 40, 50];
```
Use a `for` loop to print every element.
```text
Expected Output:
10
20
30
40
50
```

#### Problem 8: Find the Last Element
Given:
```javascript
const fruits = ["Apple", "Banana", "Mango"];
```
Print the last element without directly using index `2`.
```text
Expected Output:
Mango
```
> **Hint:** `array[array.length - 1]`

---

### Challenge Problems

#### Problem 9: Calculate Total Marks
Given:
```javascript
const marks = [80, 75, 90, 85, 70];
```
Calculate the total marks using a loop.
```text
Expected Output:
400
```

#### Problem 10: Find the Largest Number
Given:
```javascript
const numbers = [10, 45, 20, 80, 35];
```
Find the largest number using a loop.
```text
Expected Output:
80
```

---

## 13. Summary

| Concept | Meaning |
| :--- | :--- |
| **Array** | Stores multiple values |
| **Element** | A value inside an array |
| **Index** | Position of an element |
| **Zero-based Indexing** | First element starts at `0` |
| **`length`** | Total number of elements |
| **`push()`** | Adds element at the end |
| **`pop()`** | Removes element from the end |
| **`shift()`** | Removes element from the beginning |
| **`unshift()`** | Adds element at the beginning |
| **Loop** | Accesses elements one by one |

### Final Reminder
* JavaScript arrays store multiple values in one variable.
* Array indexing starts from `0`.
* Use `length` to find the total number of elements.
* Use `push()` and `pop()` to manage array elements.
* Use loops to access array elements.
* Arrays are one of the most important foundations of JavaScript.

Keep practicing arrays because they are widely used in JavaScript, React, API data handling, and real-world web development.
