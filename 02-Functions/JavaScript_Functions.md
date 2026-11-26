JavaScript FunctionsA comprehensive bilingual (English + বাংলা) guide to understanding, writing, and mastering JavaScript functions.Table of ContentsWhat is a Function?Why Do We Use Functions?How Does a Function Work?Function SyntaxBasic Function ExamplesParameters and ArgumentsReturn StatementReal-World ExamplesStep-by-Step Output ExplanationFunction TypesCommon MistakesInterview QuestionsPractice ProblemsSummary & Final Reminder01. What is a Function?English Explanation: A function is a reusable block of code designed to perform a specific task. We can define a function once and execute it whenever we need by calling it.সহজ বাংলা Explanation: Function হলো JavaScript-এর একটি reusable code block, যা নির্দিষ্ট কোনো কাজ সম্পন্ন করার জন্য তৈরি করা হয়। একবার function তৈরি করে আমরা সেটিকে বারবার ব্যবহার করতে পারি।উদাহরণস্বরূপ ব্যবহার:দুইটি সংখ্যা যোগ করাUser-এর নাম দেখানোকোনো পণ্যের দাম calculate করাLogin validation করা02. Why Do We Use Functions?English Explanation: We use functions to make our code reusable, organized, easy to understand, easy to maintain, and less repetitive.সহজ বাংলা Explanation: Function ব্যবহার করার প্রধান কারণ হলো একই code বারবার না লিখে একবার লিখে অনেকবার ব্যবহার করা। এতে আমাদের code ছোট, পরিষ্কার এবং maintain করা সহজ হয়।Example Without Functionconsole.log(10 + 20);
console.log(30 + 40);
console.log(50 + 60);
Example With Functionfunction addNumbers(a, b) {
  console.log(a + b);
}

addNumbers(10, 20);
addNumbers(30, 40);
addNumbers(50, 60);
Expected Output:30
70
110
Key Point: Function helps us follow the DRY principle (DRY = Don't Repeat Yourself).03. How Does a Function Work?English Explanation: A function generally works through three steps: Function Declaration, Function Calling, and Function Execution.সহজ বাংলা Explanation: Function কাজ করার জন্য সাধারণত তিনটি ধাপ থাকে:Step 1: Function তৈরি করা (Declaration)function greet() {
  console.log("Hello!");
}
এখানে আমরা greet নামে একটি function তৈরি করেছি, কিন্তু এখনো function execute হয়নি।Step 2: Function Call করা (Calling)greet();
এখন function-টিকে call করা হয়েছে।Step 3: Function Execute হওয়া (Execution)Function call হওয়ার পর এর ভেতরের console.log("Hello!"); কোডটি execute হবে।Expected Output:Hello!
Important Concept: Function declaration করলেই function execute হয় না। Function execute করার জন্য অবশ্যই function call করতে হয়।04. Function SyntaxBasic Syntaxfunction functionName(parameters) {
  // Code to execute
}
Syntax BreakdownPartExplanationfunctionFunction তৈরি করার keywordfunctionNameFunction-এর নামparametersFunction-এর input variables{ }Function body (যেখানে মূল কোড লেখা হয়)functionName()Function execute করার জন্য callExamplefunction sayHello() {
  console.log("Hello JavaScript");
}

sayHello();
Expected Output:Hello JavaScript
05. Basic Function ExamplesExample 1: Simple Functionfunction welcome() {
  console.log("Welcome to JavaScript!");
}

welcome();
Expected Output:Welcome to JavaScript!
Example 2: Function with Parametersfunction greet(name) {
  console.log("Hello " + name);
}

greet("Sakib");
Expected Output:Hello Sakib
Explanation: এখানে name হলো parameter এবং "Sakib" হলো argument। Function call করার সময় argument-এর value parameter-এর মধ্যে চলে যায়।06. Parameters and ArgumentsEnglish Explanation: A parameter is a variable defined in a function declaration. An argument is the actual value passed to a function when calling it.সহজ বাংলা Explanation: Function তৈরি করার সময় যে variable ব্যবহার করা হয় সেটি হলো parameter, আর function call করার সময় যে value পাঠানো হয় সেটি হলো argument।function add(a, b) { // a and b are parameters
  console.log(a + b);
}

add(10, 20); // 10 and 20 are arguments
Expected Output:30
07. Return StatementEnglish Explanation: The return statement sends a value back from a function to the place where the function was called.সহজ বাংলা Explanation: return ব্যবহার করে function থেকে কোনো value বাইরে পাঠানো যায়। Function-এর result অন্য variable-এ store করতে বা পরবর্তী calculation-এ ব্যবহার করতে return খুব গুরুত্বপূর্ণ।function add(a, b) {
  return a + b;
}

const result = add(10, 20);
console.log(result);
Expected Output:30
Important Difference: console.log() vs returnUsing console.log()Using returnjavascript<br>function add(a, b) {<br>  console.log(a + b);<br>}<br>const result = add(10, 20);<br>console.log(result);<br>javascript<br>function add(a, b) {<br>  return a + b;<br>}<br>const result = add(10, 20);<br>console.log(result);<br>Output:30undefinedOutput:30Why?console.log() শুধু value console-এ দেখায়।return value function থেকে বাইরে পাঠায়।Remember: A function without an explicit return statement returns undefined.08. Real-World ExamplesExample 1: Shopping Price Calculatorfunction calculateTotal(price, quantity) {
  return price * quantity;
}

const totalPrice = calculateTotal(500, 3);
console.log("Total Price:", totalPrice);
Expected Output: Total Price: 1500Real-life Explanation: একটি product-এর দাম 500 টাকা এবং 3টি product কিনলে total price calculate করা হয়েছে।Example 2: Check User Agefunction checkAge(age) {
  if (age >= 18) {
    return "You are eligible";
  } else {
    return "You are not eligible";
  }
}

console.log(checkAge(20));
console.log(checkAge(15));
Expected Output:You are eligible
You are not eligible
Real-life Use Case: Website registration, age verification, এবং user eligibility checking।Example 3: Calculate Discountfunction calculateDiscount(price, discount) {
  const discountAmount = (price * discount) / 100;
  return price - discountAmount;
}

console.log(calculateDiscount(1000, 10));
Expected Output: 900Real-life Explanation: Product price 1000 টাকা এবং 10% discount বাদে final price = 900 টাকা।09. Step-by-Step Output Explanationfunction multiply(a, b) {
  return a * b;
}

const result = multiply(5, 4);
console.log(result);
Function Declaration: multiply(a, b) তৈরি হয়েছে।Function Call: multiply(5, 4) call করার সময় a = 5 এবং b = 4 সেট হয়।Calculation: return 5 * 4; থেকে 20 রিটার্ন হয়।Store Result: const result = 20; ভ্যারিয়েবলে মান জমা হয়।Print Output: console.log(result); কনসোলে 20 প্রিন্ট করে।10. Function TypesJavaScript-এ বিভিন্নভাবে function তৈরি করা যায়:1. Function Declarationfunction greet() {
  console.log("Hello");
}
greet();
2. Function Expressionconst greet = function () {
  console.log("Hello");
};
greet();
3. Arrow Functionconst greet = () => {
  console.log("Hello");
};
greet();
4. Function with Returnfunction square(number) {
  return number * number;
}
console.log(square(5)); // Output: 25
5. Function with Default Parameterfunction greet(name = "Guest") {
  console.log("Hello " + name);
}

greet();        // Output: Hello Guest
greet("Sakib"); // Output: Hello Sakib
11. Common MistakesMistake 1: Forgetting Function Callfunction greet() {
  console.log("Hello");
}
// Output: No output (because greet() was never called)

// Correct:
greet();
Mistake 2: Using console.log Instead of returnfunction add(a, b) {
  console.log(a + b);
}
const result = add(10, 20);
console.log(result); // Output: 30, undefined

// Correct:
function add(a, b) {
  return a + b;
}
Mistake 3: Missing Parameter Valuefunction add(a, b) {
  return a + b;
}
console.log(add(10)); // Output: NaN (কারণ b-এর value দেওয়া হয়নি)

// Correct:
console.log(add(10, 20)); // Output: 30
Mistake 4: Code After returnfunction test() {
  return 10;
  console.log("Hello"); // Never executes (কারণ return-এর পর function শেষ হয়ে যায়)
}
test();
Mistake 5: Incorrect Function Namefunction greet() {
  console.log("Hello");
}
great(); // ReferenceError (নাম greet, কিন্তু call করা হয়েছে great)
12. Interview QuestionsQ1. What is a function in JavaScript?English: A function is a reusable block of code designed to perform a specific task.বাংলা: Function হলো নির্দিষ্ট কাজ সম্পন্ন করার জন্য তৈরি reusable code block।Q2. Why do we use functions?English: We use functions to reuse code, reduce repetition, improve readability, and make code easier to maintain.বাংলা: Code বারবার লেখা কমাতে, code reuse করতে এবং program পরিষ্কার রাখতে function ব্যবহার করা হয়।Q3. What is the difference between parameters and arguments?English: Parameters are variables defined in a function declaration, while arguments are actual values passed during a function call.বাংলা: Function declaration-এর variable হলো parameter এবং function call-এর value হলো argument।Q4. What is the difference between return and console.log?English: console.log() displays a value in the console, while return sends a value back from the function.বাংলা: console.log() console-এ value দেখায়, আর return function থেকে value বাইরে পাঠায়।Q5. What happens if a function does not return anything?English: A function returns undefined if it does not explicitly return a value.বাংলা: Function থেকে কোনো value return না করলে JavaScript default হিসেবে undefined return করে।Q6. What is a function call?English: A function call is the process of executing a function by using its name followed by parentheses.বাংলা: Function-এর নামের পরে parentheses ব্যবহার করে function execute করাকে function call বলে।Q7. Can we call a function multiple times?English: Yes, we can call a function multiple times whenever needed.বাংলা: হ্যাঁ, প্রয়োজন অনুযায়ী একই function বারবার call করা যায়।13. Practice ProblemsBeginner LevelGreeting Function: Create a function named greet that prints Hello JavaScript!.Add Two Numbers: Create a function add(a, b) that takes two numbers and returns their sum (add(10, 20) $\rightarrow$ 30).Square a Number: Create a function square(n) that takes a number and returns its square (square(5) $\rightarrow$ 25).Check Even or Odd: Create a function checkEvenOdd(num) that returns "Even" or "Odd" (checkEvenOdd(7) $\rightarrow$ "Odd").Intermediate LevelFind the Largest Number: Create a function findMax(a, b) that returns the larger number (findMax(10, 25) $\rightarrow$ 25).Calculate Rectangle Area: Create a function calculateArea(length, width) using $\text{Area} = \text{Length} \times \text{Width}$ (calculateArea(10, 5) $\rightarrow$ 50).Calculate Discount: Create a function calculateDiscount(price, discount) (calculateDiscount(1000, 20) $\rightarrow$ 800).Convert Celsius to Fahrenheit: Create a function celsiusToFahrenheit(c) using $\text{Fahrenheit} = (\text{Celsius} \times \frac{9}{5}) + 32$ (celsiusToFahrenheit(0) $\rightarrow$ 32).14. Summary & Final ReminderConceptMeaningFunctionReusable block of codeParameterVariable defined in function declarationArgumentActual value passed to function when callingFunction CallExecuting a function using ()ReturnSending a value back from the functionconsole.log()Displaying output in the consoleDefault ParameterFallback value for a parameter if no argument is passedFinal ReminderFunction declaration does not automatically execute the function; function call executes it.Parameters receive arguments.return sends a value back; console.log() only displays a value.Keep practicing functions because they are one of the most important foundations of JavaScript!
