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
```text
Mango
```

**Explanation:**  
Array-এর `length` হলো `3`। তাই শেষ index: `3 - 1 = 2`, এবং `fruits[2]` এর ফলাফল হলো `"Mango"`।
