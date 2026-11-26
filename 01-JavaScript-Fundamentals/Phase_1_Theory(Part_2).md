## Control Flow: `break` & `continue`

### 1. What is `break`?
`break` হলো এমন একটি statement যা loop বা `switch` থেকে তৎক্ষণাৎ বেরিয়ে আসে। যেই মুহূর্তে `break` পায়, সেই loop বা `switch` আর চালায় না।

```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;          // 5 পেলেই loop থেমে যাবে
  }
  console.log(i);   // Output: 1 2 3 4
}
```

---

### 2. What is `continue`?
`continue` হলো এমন statement যা বর্তমান iteration skip করে পরের iteration-এ চলে যায়। এতে loop থেমে যায় না, শুধু সেইবারের বাকি কোড skip হয়।

```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;       // 3 skip হবে
  }
  console.log(i);   // Output: 1 2 4 5
}
```

---

### 3. Difference between `break` and `continue`

| বিষয় | `break` | `continue` |
| :--- | :--- | :--- |
| **কাজ** | পুরো loop বা `switch` থেকে বেরিয়ে আসে | শুধু বর্তমান iteration skip করে |
| **Loop কি থেমে যায়?** | হ্যাঁ, থেমে যায় | না, পরের iteration চলে |
| **ব্যবহার** | নির্দিষ্ট condition পূরণ হলে থামানো | নির্দিষ্ট value বা শর্ত skip করতে |

---

### 4. Can we use `break` in a `switch` statement?
হ্যাঁ, অবশ্যই। `switch`-এ `break` না দিলে **fall-through** হয় (অর্থাৎ একটি case মিললে নিচের case-গুলোও চেক না করে চলতে থাকে)।

```javascript
let day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;                 // না দিলে নিচেরগুলোও চলত
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Other day");
}
```

---

### 5. What happens if `continue` executes?
`continue` execute হলে:
* সেই iteration-এর নিচের বাকি কোডগুলো skip হয়।
* loop-এর পরবর্তী iteration শুরু হয় (condition check করে)।

```javascript
for (let i = 1; i <= 6; i++) {
  if (i % 2 === 0) {
    continue;           // even number পেলে skip
  }
  console.log(i);       // শুধু odd সংখ্যা print হবে → 1 3 5
}
```
