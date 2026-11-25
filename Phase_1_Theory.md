# JavaScript Mastery – Theory + Coding Practice

## ১. Theory Questions

### 1. What is dynamic typing?
JavaScript-এ variable-এর type আগে থেকে declare করতে হয় না। Runtime-এ value অনুসারে type নির্ধারিত হয়, এবং একই variable-এ পরে অন্য type-এর value রাখা যায়।

```javascript
let x = 10;        // number
x = "Hello";       // এখন string
x = true;          // এখন boolean
```

---

### 2. Difference between `null` and `undefined`

| বিষয় | `undefined` | `null` |
| :--- | :--- | :--- |
| **মানে** | Variable declare করা হয়েছে কিন্তু value দেওয়া হয়নি | ইচ্ছাকৃতভাবে "কোনো value নেই" বোঝানো হয় |
| **Type** | `undefined` | `object` (historical bug) |
| **কখন হয়** | Default value হিসেবে (JavaScript নিজেই দেয়) | Programmer manually set করে |

```javascript
let a;
console.log(a);        // undefined
console.log(typeof a); // "undefined"

let b = null;
console.log(b);        // null
console.log(typeof b); // "object"
```

---

### 3. Output of `typeof null`
JavaScript-এর শুরুর দিকের একটি historical bug-এর কারণে `null`-এর type `"object"` দেখায়।

```javascript
console.log(typeof null); // "object"
```

---

### 4. What is `BigInt`?
বড় পূর্ণসংখ্যা (`Number`-এর safe limit $2^{53} - 1$ এর বাইরে) handle করার জন্য `BigInt` ব্যবহার করা হয়। সংখ্যার শেষে `n` দিয়ে লেখা হয়।

```javascript
const big = 9007199254740991n;
const bigger = big + 2n;
```

---

### 5. What is `Symbol`?
`Symbol` হলো unique এবং immutable primitive value। Object-এর property key হিসেবে ব্যবহার করা হয় যাতে property name collision না হয়।

```javascript
const id = Symbol("id");
const user = {
  [id]: 123
};
```
