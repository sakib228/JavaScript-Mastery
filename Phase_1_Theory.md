JavaScript Mastery – Theory + Coding Practice
---------------------------------------------
১. Theory Questions1. What is dynamic typing?

JavaScript-এ variable-এর type আগে থেকে declare করতে হয় না।
runtime-এ value অনুসারে type নির্ধারিত হয়। একই variable-এ পরে অন্য type-এর value রাখা যায়।
code :
let x = 10;        // number
x = "Hello";       // এখন string
x = true;          // এখন boolean
---------------------------------------------
2. Difference between null and undefined

### `undefined` vs `null`

| বিষয় | `undefined` | `null` |
| :--- | :--- | :--- |
| **মানে** | Variable declare করা হয়েছে কিন্তু value দেওয়া হয়নি | ইচ্ছাকৃতভাবে "কোনো value নেই" বোঝানো হয় |
| **Type** | `undefined` | `object` (historical bug) |
| **কখন হয়** | Default value হিসেবে (JavaScript নিজেই দেয়) | Programmer manually set করে |

code :
let a;
console.log(a);        // undefined
console.log(typeof a); // "undefined"

let b = null;
console.log(b);        // null
console.log(typeof b); // "object"
---------------------------------------------
3. Output of typeof null
code :
typeof null;   // "object"v
---------------------------------------------
4. What is BigInt?

বড় সংখ্যা (Number-এর safe limit 2^53 - 1 এর বাইরে) handle করার জন্য। শেষে n দিয়ে লেখা হয়।
code :
const big = 9007199254740991n;
const bigger = big + 2n;
---------------------------------------------
5. What is Symbol?

Unique এবং immutable primitive value। Object-এর property key হিসেবে ব্যবহার করা হয় যাতে collision না হয়।
code :
const id = Symbol("id");
const user = { [id]: 123 };


