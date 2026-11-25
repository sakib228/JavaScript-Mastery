6. Primitive vs Non-primitive

| Primitive | Non-primitive (Reference) |
| --- | --- |
| string, number, boolean, null, undefined, bigint, symbol | Object, Array, Function, Date ইত্যাদি |
| Value দিয়ে compare হয় | Reference (memory address) দিয়ে compare হয় |
| Immutable | Mutable |
---------------------------------------------
7. if-else vs switch

if-else → জটিল condition, range check, multiple conditions-এ ভালো।
switch → একটা expression-এর অনেক fixed value check করার জন্য পরিষ্কার ও দ্রুত।
---------------------------------------------
8. Purpose of break

switch বা loop থেকে বাইরে বেরিয়ে আসার জন্য। break না দিলে switch-এ fall-through হয়।
---------------------------------------------
9. Default case

switch-এ কোনো case match না করলে যেটা execute হয়। else-এর মতো।
---------------------------------------------
10. for vs while
for → কতবার loop চলবে জানা থাকলে (counter-based)।
while → condition true থাকলে চলবে, কতবার জানা নেই।

