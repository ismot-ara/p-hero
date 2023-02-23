// 19-5 Text instruction Practice variable , array , conditional loop
/**
 * 1.Do you know what is javascript?
 * Ans: JavaScript is a high-level, interpreted programming language that is primarily used to create dynamic and interactive web pages. It is an essential part of web development and is used to create interactive and responsive user interfaces, validate form data, create animations, and handle user interactions through event handling. JavaScript can also be used on the server-side, through technologies such as Node.js, which allows developers to build scalable and fast server applications using JavaScript.

JavaScript is considered an easy-to-learn language, as it is based on the syntax of the C programming language and has a relatively simple syntax. It is an object-oriented language and has many features such as functions, arrays, and loops, making it a versatile language that can be used for many different types of applications.

basic: JavaScript is a computer language used to make websites more interesting and interactive. It allows things like moving images, pop-up windows, and changes to the website without having to reload the whole page. People use it a lot on the internet to make their websites more fun and interactive.

2. how to work javascript?
Ans: JavaScript works by adding interactive and dynamic elements to a website. When a web page is loaded into a browser, the JavaScript code on that page is executed by the browser's JavaScript engine.

Here's a simple example to give you an idea of how JavaScript works:

A web page is created with HTML and CSS.
JavaScript code is added to the page.
When the page is loaded in a browser, the JavaScript code is executed by the browser's JavaScript engine.
The JavaScript code manipulates the HTML and CSS on the page to create dynamic effects, such as updating the content of an element, changing the styles of elements, or responding to user interactions.
In this way, JavaScript can be used to add interactivity and other dynamic elements to a website, making it more engaging and user-friendly.

3. What is variable?
Ans: In programming, a variable is a value that can change, depending on conditions or on information passed to the program. 

4. How to declare variable?
Ans: In JavaScript, a variable can be declared using var, let, const keywords.

* var keyword is used to declare variables since JavaScript was created. It is confusing and error-prone when using variables declared using var.
* let keyword removes the confusion and error of var. It is the new and recommended way of declaring variables in JavaScript.
* const keyword is used to declare a constant variable that cannot be changed once assigned a value.

5. How to change or update the value of variables?
Ans: 
 */
var num1 = 100;
console.log(num1);
num1 = 500;
console.log(num1);
var fruits = ['apple', 'banana', 'Orange', 'grapes'];
fruits[1] = 'kola';
console.log(fruits);
/***
 * 6. What are the types of variables?
 * Ans: In Javascript, there are five basic, or primitive, types of data. The five most basic types of data are strings, numbers, booleans, undefined, and null.
 * Non-primitive> Object, Array, function
 * 
 * 7. What are the primitive and non primitive data types?
 * Ans: Primitive > strings, numbers, booleans, undefined, and null.
 * Non-primitive> Object, Array, function
 * 
 * 8. How to declare variable? What cannot be written while declaring variables? Tell about variable naming convention.
 * Ans: 4 number ans.
 * > var price = 29;
 * > cannot use keywords as a variable name
 * > cannot use space
 * > can not have quotation
 * > can not start with any number
 * > Use camelCase
 * > can not use dash -
 * > can use underscore _
 * 9 use =, -, *, /, % between two variables
 */
var a = 10;
var b = 2;
var c = a;
console.log(c);
var d = a - b;
console.log(d);
var e = a*b;
console.log(e);
var f = a / b;
console.log(f);
var g = a % b;
console.log(g);
/**
 * 10. short hand +=, *=, /=
 */
var h = 20;
 h += 1; // h = h + 1
console.log(h);
var i = 30;
i -= 1; // i = i - 1
console.log(i);
var j = 3;
j *= 2; // j = j * 2
console.log(j);
var k = 40;
k /= 4; // k = k / 4
console.log(k);
/**
 * 11. Do you know what ++ and -- does?
 * ans: ++ increse value 1 from it's current value.
 * -- decrease value 1 from it's current value.


* 12. parseInt, parseFloat, toFixed
 * Ans:
 */
var parse = "5263";
var l = parseInt(parse);
console.log(l);

var s_string = "523.693556";
console.log(parseFloat(s_string));

var to_fixed = 23.5551;
var t = to_fixed.toFixed(2);
console.log(t);

/***
 * 13. how to declare array
 * Ans:
 */
var fruits = ['Apple', 'Banana', 'Orange', 'Coconut', 'Guava', 'Watermelon', 'Mango', 'Dragon'];
console.log(fruits);

//14. how many elements in array?
var len = fruits.length;
console.log(len);
 //15.How to work index in array? how to change it's value?
fruits[6] = 'Bangi';
console.log(fruits);
//16. What is value is -1 of any index of array?
// It's not exists in array
//17. how to find value of an array with index?
console.log(fruits[0]);

var k = fruits.indexOf('Guava');
console.log(k);
// 20. undefined
console.log(fruits[10]);
//21. 
fruits.push("Kiwi");
console.log(fruits);
fruits.pop();
//remove first 
const array1 = [1, 2, 3];

const firstElement = array1.shift();
//add in first
console.log(array1.unshift(4, 5));
// Expected output: 5

console.log(array1);
// Expected output: Array [4, 5, 1, 2, 3]
/* 24.  তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে। */
var money = 1000;
if(money > 80000){
    console.log('You can buy Mac');
} else if(money > 60000){
    console.log('You can buy gaming laptop');  
} else if(money > 40000){
    console.log('You can buy Lenevo yoga computer');
} else{
    console.log('You can buy Old laptop');
}
/**২৫. আসকে আমার মন ভালো নেই এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও।  */
for(i = 1; i < 40; i++){
    console.log(i  + " আসকে আমার মন ভালো নেই");
}

//২৬. while লুপ কিভাবে কাজ করে
let count = 1;
while(count < 5){
    console.log("javascript is fun");
    count++;
}
/**২৭. for লুপ কিভাবে কাজ করে 
 * ২৮. while লুপ এর মধ্যে লুপ ভেরিয়েবল চেইঞ্জ না করলে কি সমস্যা হয়। 
 * unlimited output
 * ২৯. একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও
 */
var p29 = 58;
while( p29 <= 98){
    console.log(p29);
    p29++;
}
/**
 * ৩০.একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও
 * ৩১. একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও 
 * ৩২.while আর for loop এর মধ্যে পার্থক্য কি 
 */
var p30 = 412;
while( p30 <= 456){
    console.log(p30);
    p30+=2;
}
var p31 = 581;
while( p31 <= 623){
    console.log(p31);
    p31+=2;
}
/**৩৩ তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও।  
 * ৩৪. তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও 
*/

var learnSrity = ['html', 'css', 'bootstrap', 'wordpress', 'variable', 'array', 'loop'];
for(i = 0; i < learnSrity.length; i++){
    console.log(learnSrity[i]);
}
var i = 0;
while(i < learnSrity.length){
    //console.log(learnSrity[i]);
    i++;
}
/**
 * ৩৫. একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও 
 */
for(i = 30; i <= 86; i++){
    if(i == 44){
        
        break;
    }
    console.log(i);
}
/**৩৬. তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা।  */
var bookPrice = [252, 632, 25, 86, 963, 123, 185];
for(i = 0; i < bookPrice.length; i++){
    if(bookPrice[i] > 200){
        continue;
    }
    console.log(bookPrice[i]);
}
