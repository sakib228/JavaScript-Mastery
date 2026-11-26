## JavaScript Fundamentals: Data Types, Conditionals & Loops

### 6. Primitive vs Non-primitive

| বিষয় | Primitive | Non-primitive (Reference) |
| :--- | :--- | :--- |
| **Types** | `string`, `number`, `boolean`, `null`, `undefined`, `bigint`, `symbol` | `Object`, `Array`, `Function`, `Date` ইত্যাদি |
| **Comparison** | Value দিয়ে compare হয় | Reference (memory address) দিয়ে compare হয় |
| **Mutability** | Immutable (পরিবর্তন হয় না) | Mutable (পরিবর্তনযোগ্য) |

```javascript
// Primitive: value কপি হয়, মূল মান অপরিবর্তিত থাকে
let num1 = 10;
let num2 = num1;
num2 = 20;
console.log(num1); // 10

// Non-primitive: একই memory reference শেয়ার করে
const obj1 = { name: "Sakib" };
const obj2 = obj1;
obj2.name = "Rafiq";
console.log(obj1.name); // "Rafiq"
```

---

### 7. `if-else` vs `switch`
* **`if-else`** → জটিল condition, range check, এবং multiple conditions যাচাই করার জন্য ভালো।
* **`switch`** → একটা expression-এর অনেক fixed value check করার জন্য পরিষ্কার ও দ্রুত।

```javascript
// if-else: range বা জটিল condition
const score = 85;
if (score >= 80) {
  console.log("Grade A+");
} else if (score >= 60) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// switch: fixed value check
const day = "Fri";
switch (day) {
  case "Fri":
    console.log("Weekend");
    break;
  case "Sun":
    console.log("Working day");
    break;
  default:
    console.log("Regular day");
}
```

---

### 8. Purpose of `break`
`switch` বা loop থেকে বাইরে বেরিয়ে আসার জন্য `break` ব্যবহার করা হয়। `switch`-এ `break` না দিলে **fall-through** হয় (অর্থাৎ ম্যাচ হওয়া case-এর নিচের case-গুলোও চেক না করে চলতে থাকে)।

```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) break; // i === 3 হলে লুপ থেমে যাবে
  console.log(i);      // Output: 1, 2
}
```

---

### 9. Default case
`switch`-এ কোনো `case` match না করলে যেটা execute হয়, সেটাই `default` case। এটি `if-else`-এর `else`-এর মতো কাজ করে।

```javascript
const role = "guest";

switch (role) {
  case "admin":
    console.log("Full access");
    break;
  case "editor":
    console.log("Edit access");
    break;
  default:
    console.log("Limited guest access"); // কোনো case না মিললে এটি চলবে
}
```

---

### 10. `for` vs `while`
* **`for`** → কতবার loop চলবে জানা থাকলে (counter-based) ব্যবহার করা হয়।
* **`while`** → condition true থাকলে চলবে, কতবার চলবে তা আগে থেকে জানা না থাকলে ব্যবহার করা হয়।

```javascript
// for loop: নির্দিষ্ট সংখ্যক বার চলবে জানা আছে
for (let i = 1; i <= 3; i++) {
  console.log("for:", i);
}

// while loop: condition false না হওয়া পর্যন্ত চলবে
let num = 16;
while (num > 2) {
  num = num / 2;
  console.log("while:", num);
}
```
