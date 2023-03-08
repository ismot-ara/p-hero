//  3/3/2023
//21-2 Unit Convert Inch to Feet, miles to kilometer

//inch to feet
const myInches = 12;
const myFeet = myInches / 12;
console.log(myFeet);

const dadaInches = 144;
const dadaFeet = dadaInches / 12;
console.log('Dada Feet: ', dadaFeet);

function inchToFeet(inches){
    const feet = inches/12;
    return feet;
}
const viinches = 123;
const viFeet = inchToFeet(viinches);
console.log(viFeet);

// miles to kilometer
function milesTokilometer(miles){
    const kilometer = miles*1.609;
    return kilometer;
}
const myFar = milesTokilometer(2);
console.log(myFar);

//21-3 Check even and odd number using function
/**Peter's schoool teacher asked him to write a program that would return true if a mumber is even and false if a number is odd. Help peter write the program. */
function isEven(number){
    if(number%2 == 0){
        return true;
    }else{
        return false;
    }
}
var mynumber = 21;
var result = isEven(mynumber);
console.log(result);

function isOdd(num1){
    const remainder = num1 % 2;
    if(remainder != 0){
        console.log('number is Odd');
    }else{
        console.log('number is even');
    }
}
isOdd(522);
//21-4 Check whether a year is a Leap Year or not (simplified way)
function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
        console.log('Your year is leap year', year);
    }
    else{
        console.log('Your year is not a leap year', year);
    }
}
isLeapYear(1258);

// program to check leap year
function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

// take input
checkLeapYear(2024);

//21-5 Calculate 
/** Write a function findOddsum() that will take the array[5, 7, 8, 10, 45, 30] as the input parapeter and will return the sum of the odd numbers  */
function getSumOfAnArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum);
    }
    return sum; 
}
const myNumbers = [12, 65, 45, 78, 32, 45, 91];
getSumOfAnArray(myNumbers);
//21-6 Get Odd Numbers of an array and get odd Sum of an array
function getOddNumbersOfAnArray(numbers){
    const oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 !== 0){
            console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

const oddNumbers = getOddNumbersOfAnArray(myNumbers);
console.log(oddNumbers);
const oddNumberSum = getSumOfAnArray(oddNumbers);

console.log('odd number sum', oddNumberSum);

//21-7 Calculate Factorial of a number using for loop
// 1+2+3+4+5+6+7
function sumOfNumbers(number){
    let sum = 0;
    for(let i = 1; i<= number; i++){
        sum = sum + i;
        console.log(i, sum);
    }
    return sum;
}
sumOfNumbers(9);
// 1*2*3*4*5*6*7
function multiplicationOfNumbers(number){
    let result = 1;
    for(let i = 1; i <= 7; i++){
        result = result*i;
    }
    return result;
}
const total = multiplicationOfNumbers(7);
console.log(total);
// 1! = 1
//2! = 2*1
//3! = 3*2*1
//4! = 4*3*2*1
//21-8 Factorial using a while loop or a decrementing loop

function factorial(number){
    let result = 1;
    for(let i = number; i>= 1; i--){
        result = result * i;
        console.log(i);
    }
    return result;
}
const fact = factorial(7);
 console.log('factorial of 9: ', fact);
 //21-9 Module Summary and Simple JavaScript debug
 function getFactorial(number){
    let factorial = 1;
    for(let i = 1; i <=5; i++){
        factorial= factorial*i;
    }
    return factorial;
 }
 const factorial = getFactorial(5);
 console.log(factorial);
//21.5.0
 const namelist = ['peter', 'joao', 'rafael', 'claudio'];
console.log(namelist.includes('peter')); 
//true
//concat()
const array1 = [10, 20, 30, 40];
const array2 = ['a', 'b', 'c', 'd'];
const newArray = array1.concat(array2);
console.log(newArray);
