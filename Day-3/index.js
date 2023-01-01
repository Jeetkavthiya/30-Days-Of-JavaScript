// Boolean Datatype
let isLightOn = true
let isRaining = false
let isHungry = false
let isMarried = true
let truValue = 4 > 3    // true
let falseValue = 4 < 3  // false

// Undefined Datatype
let firstName
console.log(firstName) //not defined, because it is not assigned to a value yet

// Null Datatype
let empty = null
console.log(empty) // -> null , means no value

// Operators
// Assignment Operator
let firstName1 = 'Asabeneh'
let country = 'Finland'

// Arithmetic Operator
let numOne = 4
let numTwo = 3
let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo
console.log(sum, diff, mult, div, remainder, powerOf) // 7,1,12,1.33,1, 64
const PI = 3.14
let radius = 100          // length in meter
//Let us calculate area of a circle
const areaOfCircle = PI * radius * radius
console.log(areaOfCircle)  //  314 m
const gravity = 9.81      // in m/s2
let mass = 72             // in Kilogram
// Let us calculate weight of an object
const weight = mass * gravity
console.log(weight)        // 706.32 N(Newton)
const boilingPoint = 100  // temperature in oC, boiling point of water
const bodyTemp = 37       // body temperature in oC
// Concatenating string with numbers using string interpolation
/*
 The boiling point of water is 100 oC.
 Human body temperature is 37 oC.
 The gravity of earth is 9.81 m/s2.
 */
console.log(
    `The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`
)

// Comparison Operator
console.log(3 > 2)              // true, because 3 is greater than 2
console.log(3 >= 2)             // true, because 3 is greater than 2
console.log(3 < 2)              // false,  because 3 is greater than 2
console.log(2 < 3)              // true, because 2 is less than 3
console.log(2 <= 3)             // true, because 2 is less than 3
console.log(3 == 2)             // false, because 3 is not equal to 2
console.log(3 != 2)             // true, because 3 is not equal to 2
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same
console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number
console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false

// Logical Operator
// && ampersand operator example
const check1 = 4 > 3 && 10 > 5         // true && true -> true
const check2 = 4 > 3 && 10 < 5         // true && false -> false
const check3 = 4 < 3 && 10 < 5         // false && false -> false
// || pipe or operator, example
const check4 = 4 > 3 || 10 > 5         // true  || true -> true
const check5 = 4 > 3 || 10 < 5         // true  || false -> true
const check6 = 4 < 3 || 10 < 5         // false || false -> false
//! Negation examples
let check7 = 4 > 3                     // true
let check8 = !(4 > 3)                  //  false
let isLightOn2 = true
let isLightOff = !isLightOn2           // false
let isMarried2 = !false                // true

// Increment Operator
// Pre-increment
let count = 0
console.log(++count)        // 1
console.log(count)          // 1
// Post-increment
let count2 = 0
console.log(count2++)        // 0
console.log(count2)          // 1

// Decrement Operator
// Pre-drecemtent 
let count3 = 0
console.log(--count3) // -1
console.log(count3)  // -1
// Post-decrement
let count4 = 0
console.log(count4--) // 0
console.log(count4)   // -1

// Ternery Operator
let isRaining2 = true
isRaining2
    ? console.log('You need a rain coat.')
    : console.log('No need for a rain coat.')
isRaining2 = false
isRaining2
    ? console.log('You need a rain coat.')
    : console.log('No need for a rain coat.')

// Window Methods
// Window alert() method
alert('Welcome to 30DaysOfJavaScript')

// Window prompt() method
let number = prompt('Enter number', 'number goes here')
console.log(number)

// Window confirm() method
const agree = confirm('Are you sure you like to delete? ')
console.log(agree) // result will be true or false based on what you click on the dialog box

// Date Object
// Creating a time object
const now = new Date()
console.log(now) // Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)
console.log(now.getFullYear()) // 2020
console.log(now.getMonth()) // 0, because the month is January,  month(0-11)
console.log(now.getDate()) // 4, because the day of the month is 4th,  day(1-31)
console.log(now.getDay()) // 6, because the day is Saturday which is the 7th day
console.log(now.getHours()) // 0, because the time is 00:56:41
console.log(now.getMinutes()) // 56, because the time is 00:56:41
console.log(now.getSeconds()) // 41, because the time is 00:56:41
console.log(now.getTime()) // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41