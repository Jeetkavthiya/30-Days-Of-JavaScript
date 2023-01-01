// Comparison Of Primitive Datatypes
let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)       // true

let js = 'JavaScript'
let py = 'Python'

console.log(js == py)               //false 

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff)    // false

// Non-Primitive Datatypes
let nums = [1, 2, 3]
nums[0] = 10

console.log(nums)                   // [10, 2, 3]

// Comparison Of Non-Primitive Datatypes
let nums = [1, 2, 3]
let numbers = [1, 2, 3]

console.log(nums == numbers)        // false

let userOne = {
    name: 'Asabeneh',
    role: 'teaching',
    country: 'Finland'
}

let userTwo = {
    name: 'Asabeneh',
    role: 'teaching',
    country: 'Finland'
}

console.log(userOne == userTwo)     // false

let num = [1, 2, 3]
let number = num

console.log(num == number)          // true

let userone = {
    name: 'Asabeneh',
    role: 'teaching',
    country: 'Finland'
}

let usertwo = userone

console.log(userone == usertwo)     // true

// Number Datatype
let age = 35
const gravity = 9.81                // we use const for non-changing values, gravitational constant in  m/s2
let mass = 72                       // mass in Kilogram
const pi = 3.14                     // pi a geometrical constant

// More Examples
const boilingPoint = 100            // temperature in oC, boiling point of water which is a constant
const bodyTemp = 37                 // oC average human body temperature, which is a constant

console.log(age, gravity, mass, pi, boilingPoint, bodyTemp)

// Math Object
const PI = Math.PI

console.log(PI)                            // 3.141592653589793

// Rounding to the closest number
// if above .5 up if less 0.5 down rounding

console.log(Math.round(PI))                // 3 to round values to the nearest number

console.log(Math.round(9.81))              // 10

console.log(Math.floor(PI))                // 3 rounding down

console.log(Math.ceil(PI))                 // 4 rounding up

console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value

console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value

const randNum = Math.random() // creates random number between 0 to 0.999999
console.log(randNum)

// Let us  create random number between 0 to 10

const num1 = Math.floor(Math.random() * 11) // creates random number between 0 and 10
console.log(num1)

//Absolute value
console.log(Math.abs(-10))      // 10

//Square root
console.log(Math.sqrt(100))     // 10

console.log(Math.sqrt(2))       // 1.4142135623730951

// Power
console.log(Math.pow(3, 2))     // 9

console.log(Math.E)             // 2.718

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2))        // 0.6931471805599453
console.log(Math.log(10))       // 2.302585092994046

// Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2)           // 0.6931471805599453
console.log(Math.LN10)          // 2.302585092994046

// Trigonometry
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)

// String Datatype
let space = ' '           // an empty space string
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let quote = "The saying,'Seeing is Believing' is not correct in 2020."
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`

// String Concatenation
let fullName = firstName + space + lastName; // concatenation, merging two string together.
console.log(fullName);

// Escape Sequencies in String
console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')

// String Literals
console.log(`The sum of 2 and 3 is 5`)              // statically writing the data
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically
console.log(`${a} is greater than ${b}: ${a > b}`)

// String Methods
// length
let js1 = 'JavaScript'
console.log(js1.length)         // 10
let firstName1 = 'Asabeneh'
console.log(firstName1.length)  // 8
// Accessing Characters in a string
let string = 'JavaScript'
let firstLetter = string[0]
console.log(firstLetter)           // J
let secondLetter = string[1]       // a
let thirdLetter = string[2]
let lastLetter = string[9]
console.log(lastLetter)            // t
let lastIndex = string.length - 1
console.log(lastIndex)  // 9
console.log(string[lastIndex])    // t
// toUpperCase
let string1 = 'JavaScript'
console.log(string1.toUpperCase())     // JAVASCRIPT
let firstName2 = 'Asabeneh'
console.log(firstName2.toUpperCase())  // ASABENEH
let country1 = 'Finland'
console.log(country1.toUpperCase())    // FINLAND
// toLowerCase
let string2 = 'JavasCript'
console.log(string.toLowerCase())     // javascript
let firstName3 = 'Asabeneh'
console.log(firstName.toLowerCase())  // asabeneh
let country2 = 'Finland'
console.log(country.toLowerCase())   // finland
// substr
let string3 = 'JavaScript'
console.log(string3.substr(4, 6))    // Script
let country3 = 'Finland'
console.log(country3.substr(3, 4))   // land
// subString
let string4 = 'JavaScript'
console.log(string4.substring(0, 4))     // Java
console.log(string4.substring(4, 10))    // Script
console.log(string4.substring(4))       // Script
let country4 = 'Finland'
console.log(country4.substring(0, 3))   // Fin
console.log(country4.substring(3, 7))   // land
console.log(country4.substring(3))      // land
// split
let string5 = '30 Days Of JavaScript'
console.log(string5.split())     // Changes to an array -> ["30 Days Of JavaScript"]
console.log(string5.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]
let firstName5 = 'Asabeneh'
console.log(firstName5.split())    // Change to an array - > ["Asabeneh"]
console.log(firstName5.split(''))  // Split to an array at each letter ->  ["A", "s", "a", "b", "e", "n", "e", "h"]
let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'
console.log(countries.split(','))  // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', ')) //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]
// trim
let string6 = '   30 Days Of JavaScript   '
console.log(string6)
console.log(string6.trim(' '))
let firstName6 = ' Asabeneh '
console.log(firstName)
console.log(firstName.trim())  // still removes spaces at the beginning and the end of the string
// includes
let string7 = '30 Days Of JavaScript'
console.log(string7.includes('Days'))     // true
console.log(string7.includes('days'))     // false - it is case sensitive!
console.log(string7.includes('Script'))   // true
console.log(string7.includes('script'))   // false
console.log(string7.includes('java'))     // false
console.log(string7.includes('Java'))     // true
let country7 = 'Finland'
console.log(country7.includes('fin'))     // false
console.log(country7.includes('Fin'))     // true
console.log(country7.includes('land'))    // true
console.log(country7.includes('Land'))    // false
// replace
let string8 = '30 Days Of JavaScript'
console.log(string8.replace('JavaScript', 'Python')) // 30 Days Of Python
let country8 = 'Finland'
console.log(country8.replace('Fin', 'Noman'))       // Nomanland
// charAt
let string9 = '30 Days Of JavaScript'
console.log(string9.charAt(0))        // 3
let lastIndex1 = string9.length - 1
console.log(string9.charAt(lastIndex1)) // t
// charCodeAt
let string10 = '30 Days Of JavaScript'
console.log(string10.charCodeAt(3))        // D ASCII number is 68
let lastIndex2 = string10.length - 1
console.log(string10.charCodeAt(lastIndex2)) // t ASCII is 116
// indexOf
let string11 = '30 Days Of JavaScript'
console.log(string11.indexOf('D'))          // 3
console.log(string11.indexOf('Days'))       // 3
console.log(string11.indexOf('days'))       // -1
console.log(string11.indexOf('a'))          // 4
console.log(string11.indexOf('JavaScript')) // 11
console.log(string11.indexOf('Script'))     //15
console.log(string11.indexOf('script'))     // -1
// lastIndexOf
let string12 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string12.lastIndexOf('love'))       // 67
console.log(string12.lastIndexOf('you'))        // 63
console.log(string12.lastIndexOf('JavaScript')) // 38
// concat
let string13 = '30'
console.log(string13.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript
let country13 = 'Fin'
console.log(country13.concat("land")) // Finland
// startsWith
let string14 = 'Love is the best to in this world'
console.log(string14.startsWith('Love'))   // true
console.log(string14.startsWith('love'))   // false
console.log(string14.startsWith('world'))  // false
let country14 = 'Finland'
console.log(country14.startsWith('Fin'))   // true
console.log(country14.startsWith('fin'))   // false
console.log(country14.startsWith('land'))  //  false
// endsWith
let string15 = 'Love is the most powerful feeling in the world'
console.log(string15.endsWith('world'))         // true
console.log(string15.endsWith('love'))          // false
console.log(string15.endsWith('in the world')) // true
let country15 = 'Finland'
console.log(country15.endsWith('land'))         // true
console.log(country15.endsWith('fin'))          // false
console.log(country15.endsWith('Fin'))          //  false
// search
let string16 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string16.search('love'))          // 2
console.log(string16.search(/javascript/gi))  // 7
// match
let string17 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string17.match('love'))
let pattern = /love/gi
console.log(string17.match(pattern))   // ["love", "love", "love"]
// repeat
let string18 = 'love'
console.log(string18.repeat(10)) // lovelovelovelovelovelovelovelovelovelove

// Checking Datatype
// Different javascript data types
// Let's declare different data types

let firstName4 = 'Asabeneh'      // string
let lastName4 = 'Yetayeh'        // string
let countr4 = 'Finland'         // string
let city4 = 'Helsinki'           // string
let age4 = 250                   // number, it is not my real age, do not worry about it
let job4                         // undefined, because a value was not assigned

console.log(typeof 'Asabeneh')  // string
console.log(typeof firstName4)   // string
console.log(typeof 10)          // number
console.log(typeof 3.14)        // number
console.log(typeof true)        // boolean
console.log(typeof false)       // boolean
console.log(typeof NaN)         // number
console.log(typeof job4)         // undefined
console.log(typeof undefined)   // undefined
console.log(typeof null)        // object

// Changing Datatypes
// String to Int
let num2 = '10'
let numInt = parseInt(num2)
console.log(numInt) // 10
let num3 = '10'
let numInt3 = Number(num3)
console.log(numInt3) // 10
let num4 = '10'
let numInt4 = +num4
console.log(numInt4) // 10
// String to Float
let num5 = '9.81'
let numFloat5 = parseFloat(num5)
console.log(numFloat5) // 9.81
let num6 = '9.81'
let numFloat6 = Number(num6)
console.log(numFloat) // 9.81
let num7 = '9.81'
let numFloat7 = +num7
console.log(numFloat7) // 9.81\
// Float to Int
let num8 = 9.81
let numInt8 = parseInt(num8)
console.log(numInt8) // 9