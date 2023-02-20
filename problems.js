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
 * Do you know what ++ and -- does?
 * ans: ++ increse value 1 from it's current value.
 * -- decrease value 1 from it's current value.
 */





