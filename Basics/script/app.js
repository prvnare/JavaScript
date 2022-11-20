'use strict'
let numebers = 10; // number declaration
console.log(numebers);
console.log(typeof numebers);

let bool = true; // boolean declaration
console.log(bool);
console.log(typeof bool);

let strings = "String vales"; // string delcaration
console.log(strings); // printing the value 
console.log(typeof strings); // checking the data type of the variable

let usingUndefine;
console.log(usingUndefine);
console.log(typeof usingUndefine);

console.log(typeof null); // prints Object . existing bug in JS

let age;
age = 20;

const year = 2010;
// year = 3000; --> mutation is not allowed for the const


//Excercise ---
const markHeight = 1.69;
const markWeight = 78;
const johnHeight = 1.95;
const johnWeight = 92;

const marksBMI = markWeight / (markHeight * markHeight);
const johnBMI = johnWeight / (johnHeight * johnHeight);

const markHigherBMI = marksBMI > johnBMI;
console.log(markHigherBMI);


const markHeight2 = 1.88;
const markWeight2 = 95;
const johnHeight2 = 1.76;
const johnWeight2 = 85;

const marksBMI2 = markWeight2 / (markHeight2 * markHeight2);
const johnBMI2 = johnWeight2 / (johnHeight2 * johnHeight2);

const markHigherBMI2 = marksBMI2 > johnBMI2;
console.log(markHigherBMI2);

// Strings with template literals
let hell0 = `${markHeight} is same as Jhons`;
console.log(hell0);

// if else conditions 

if (true) {
    console.log("Hello world");
} else {
    console.log("Welcome to the JavaScript world");
}


// Challenge 2 

if (markHigherBMI) {
    console.log("Marks BMI is heigher than Jhons BMI");
} else {
    console.log("Jhons BMI is heigher than Marks BMI");
}

if (markHigherBMI2) {
    console.log(`Marks BMI  ${marksBMI2} is heigher than Jhons BMI ${johnBMI2}`);
} else {
    console.log(`Jhons BMI  ${johnBMI2} is heigher than Marks BMI ${marksBMI2}`);
}

//Type conversion and Type coersion
console.log(Number("123"));
console.log(parseInt("123"));
console.log(typeof parseInt("123"));

console.log(String(123));
console.log(typeof String(123));

//Type coersion
console.log("123" - "sa"); //NAN
console.log('123' + 1);
console.log('123' - 1);

//Truthy and false value
// 0 , '' , undefined, null and NaN are falsy values
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(123));
console.log(Boolean('q'));

//Equal operators == and ===  and !== 
console.log(123 == '123');// does type coercion loose equality
console.log(123 === '123'); // strict equality 
console.log(123 !== '123'); //Strict not equal


//Functions declaration and execution

// Way 1
//Function Declaration
function printToLog() {
    console.log('hello world , welcome to the JavaScript world :)')
}
//calling the function
printToLog();

//Way 2
// Function expression 
let hello = function () {
    console.log('hello');
}

hello();

//Way 3 ES 6 feature or modern java script
// arrow function declaration functional way 
let way3 = () => console.log('Way 3');

way3();

const fun = function () {
    return 'hello';
}
console.log(fun());

//arrays
const arr = [2, 3, 4, 5];
// second way
const a = new Array(1, 2, 3,);

// JS expects expression in at each position
const b = [1, 2, fun()];
console.log(b);

const dummyArray = [];

//push method to add somthing to array at array.length - 1
// and returns the length of the array
console.log(dummyArray.push('Ram')); // returns the length of the array
console.log(dummyArray);

//unshift adds the element at begining of the array
console.log(dummyArray.unshift('Raj'));
console.log(dummyArray);

//pop  removes the last element of the array
console.log(dummyArray.pop()); //returns the removed element
console.log(dummyArray);

// shift removes the element at start of the array
console.log(dummyArray.shift());
console.log(dummyArray);

//indexOf method gives the element is at what position in the given array
console.log(dummyArray.indexOf('Ram')); // gives -1 if element not found
console.log(dummyArray);

// Objects
//stores in key value pairs
const person = {
    firstName: 'Ram',
    lastName: 'Raj'
};

//accessing elements from an object
console.log(person.firstName);
console.log(person['firstName']);
console.log();
