//19 - 1 Variable array and conditionals revision

//19-2 while loop, debug and understand while loop

var roastGiven = 0;
while(roastGiven < 7){
    //console.log('Roast Den, Please !!');
    roastGiven++;
}
//19-3 Loop example numbers, odd numbers, even numbers
/**
 * 1. Loop variable
 * 2. condition
 * 3. loop body
 * 4. change the loop variable
 */
//odd number
var number = 1;
while(number <= 10){
    console.log(number);
    number = number + 2;
}
//19-4 For loop, how for loop works, while vs for loop
var roastGiven = 0;
for(var roastGiven = 0; roastGiven < 7; roastGiven++){
    console.log('Roast Den, Please!!');
}
//even number
for(var i = 0; i <= 20; i+=2){
    console.log(i);
}

//19-5 Run a loop for each element of an array

// display every elements of an array
var numbers= [45, 87, 89, 56, 32, 51, 25, 59];
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    console.log(number);
}

//19-6(advanced) while and for loop break and continue
var items = ['bottle', 'mouse', 'sunglass', 'pen', 'notebook'];
for(var i = 0; i<items.length; i++){
    var item = items[i];
    if(item == 'pen'){
        break;
    }
    console.log(item);
}
//continue > go to next

//19-7(advanced)Understand for and while loop in reverse way
//19-8 substraction, average and remainder practice problem
//19-9 if-else and array related practice problems
var fruits = ['Apple', 'Banana', 'Orange'];
var bananaIndex = fruits.indexOf('Banana');
console.log(bananaIndex);
fruits[bananaIndex] = 'Mango';
console.log(fruits);
 
//Find largest number
var num1 = 95;
var num2 = 159;
var num3= 856;
if(num1 > num2){
    if(num1 > num3){
        console.log(num1);
    }
}else if(num2 > num3){
    console.log(num2);
} else{
    console.log(num3);
}

//isosceles
var side1 = 9;
var side2 = 8;
var side3 = 6;
if(side1 == side2 || side1 == side3 || side2 == side3){
    console.log('isosceles');
}else{
    console.log(' Not Isosceles');
}

//console.log(typeof name);
