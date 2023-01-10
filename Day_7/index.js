// Function Declaration
//declaring a function without a parameter
function functionName() {
    // code goes here
}
functionName() // calling function by its name and with parentheses

// function without parameter,  a function which make a number square
function square() {
    let num = 2
    let sq = num * num
    console.log(sq)
}
square() // 4
// function without parameter
function addTwoNumbers() {
    let numOne = 10
    let numTwo = 20
    let sum = numOne + numTwo

    console.log(sum)
}
addTwoNumbers() // a function has to be called by its name to be executed 
function printFullName() {
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    let space = ' '
    let fullName = firstName + space + lastName
    console.log(fullName)
}
printFullName() // calling a function

// Function returning value
function printFullName() {
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}
console.log(printFullName())
function addTwoNumbers() {
    let numOne = 2
    let numTwo = 3
    let total = numOne + numTwo
    return total

}
console.log(addTwoNumbers())

// Function with a parameter
// function with one parameter
function functionName(parm1) {
    //code goes her
}
functionName(parm1) // during calling or invoking one argument needed
function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
}
console.log(areaOfCircle(10)) // should be called with one argument
function square(number) {
    return number * number
}
console.log(square(10))

// Function with two parameters
// function with two parameters
function functionName(parm1, parm2) {
    //code goes her
}
functionName(parm1, parm2) // during calling or invoking two arguments needed
// Function without parameter doesn't take input, so lets make a function with parameters
function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo
    console.log(sum)
}
sumTwoNumbers(10, 20) // calling functions
// If a function doesn't return it doesn't store data, so it should return
function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo
    return sum
}
console.log(sumTwoNumbers(10, 20))
function printFullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}
console.log(printFullName('Asabeneh', 'Yetayeh'))

// Function with many parameters
// function with multiple parameters
function functionName(parm1, parm2, parm3) {
    //code goes here
}
functionName(parm1, parm2, parm3) // during calling or invoking three arguments needed
// this function takes array as a parameter and sum up the numbers in the array
function sumArrayValues(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
const numbers = [1, 2, 3, 4, 5];
//calling a function
console.log(sumArrayValues(numbers));
const areaOfCircle = (radius) => {
    let area = Math.PI * radius * radius;
    return area;
}
console.log(areaOfCircle(10))

// Function with unlimited number of parameters
// Let us access the arguments object
function sumAllNums() {
    console.log(arguments)
}
sumAllNums(1, 2, 3, 4)
// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// function declaration
function sumAllNums() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}
console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173

// Unlimited number of parameters in arrow function
// Let us access the arguments object
const sumAllNums = (...args) => {
    // console.log(arguments), arguments object not found in arrow function
    // instead we use a parameter followed by spread operator (...)
    console.log(args)
}
sumAllNums(1, 2, 3, 4)
// [1, 2, 3, 4]
// function declaration
const sumAllNums = (...args) => {
    let sum = 0
    for (const element of args) {
        sum += element
    }
    return sum
}
console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173

// Anonymous Function
const anonymousFun = function () {
    console.log(
        'I am an anonymous function and my value is stored in anonymousFun'
    )
}

// Expression Function
const square = function (n) {
    return n * n
}
console.log(square(2)) // -> 4

    // Self Invoking Functions
    (function (n) {
        console.log(n * n)
    })(2) // 4, but instead of just printing if we want to return and store the data, we do as shown below
let squaredNum = (function (n) {
    return n * n
})(10)
console.log(squaredNum)

// Arrow Function
// This is how we write normal or declaration function
// Let us change this declaration function to an arrow function
function square(n) {
    return n * n
}
console.log(square(2)) // 4
const square = n => {
    return n * n
}
console.log(square(2))  // -> 4
// if we have only one line in the code block, it can be written as follows, explicit return
const square = n => n * n  // -> 4

const changeToUpperCase = arr => {
    const newArr = []
    for (const element of arr) {
        newArr.push(element.toUpperCase())
    }
    return newArr
}
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpperCase(countries))
// ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]

const printFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
}
console.log(printFullName('Asabeneh', 'Yetayeh'))
const printFullName = (firstName, lastName) => `${firstName} ${lastName}`
console.log(printFullName('Asabeneh', 'Yetayeh'))

// Function with default parameters
// syntax
// Declaring a function
function functionName(param = value) {
    //codes
}
// Calling function
functionName()
functionName(arg)
function greetings(name = 'Peter') {
    let message = `${name}, welcome to 30 Days Of JavaScript!`
    return message
}
console.log(greetings())
console.log(greetings('Asabeneh'))

function calculateAge(birthYear, currentYear = 2019) {
    let age = currentYear - birthYear
    return age
}
console.log('Age: ', calculateAge(1819))