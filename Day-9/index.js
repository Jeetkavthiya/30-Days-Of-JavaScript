// Callback Function
// a callback function, the name of the function could be any name
const callback = (n) => {
    return n ** 2
}

// function that takes other function as a callback
function cube(callback, n) {
    return callback(n) * n
}

console.log(cube(callback, 3))

// Returning Function
// Higher order function returning an other function
const higherOrder = n => {
    const doSomething = m => {
        const doWhatEver = t => {
            return 2 * n + 3 * m + t
        }
        return doWhatEver
    }
    return doSomething
}
console.log(higherOrder(2)(3)(10))

const numbers = [1, 2, 3, 4, 5]
const sumArray = arr => {
    let sum = 0
    const callback = function (element) {
        sum += element
    }
    arr.forEach(callback)
    return sum

}
console.log(sumArray(numbers)) // 15

// setInterval Function
function sayHello() {
    console.log('Hello')
}
setInterval(sayHello, 1000) // it prints hello in every second, 1000ms is 1s

// setTimeout Function
function sayHello() {
    console.log('Hello')
}
setTimeout(sayHello, 2000) // it prints hello after it waits for 2 seconds.

// forEach Method
let sum = 0;
const numbers1 = [1, 2, 3, 4, 5];
numbers1.forEach(num => console.log(num))
console.log(sum)

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach((element) => console.log(element.toUpperCase()))

// map Method
/*Arrow function and explicit return
const modifiedArray = arr.map((element,index) => element);
*/
//Example
const numbers2 = [1, 2, 3, 4, 5]
const numbersSquare = numbers2.map((num) => num * num)
console.log(numbersSquare)

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const namesToUpperCase = names.map((name) => name.toUpperCase())
console.log(namesToUpperCase)

const countriesToUpperCase = countries.map((country) => country.toUpperCase())
console.log(countriesToUpperCase)
// ['ALBANIA', 'BOLIVIA', 'CANADA', 'DENMARK', 'ETHIOPIA', 'FINLAND', 'GERMANY', 'HUNGARY', 'IRELAND', 'JAPAN', 'KENYA']

/*
// Arrow function
const countriesToUpperCase = countries.map((country) => {
  return country.toUpperCase();
})
//Explicit return arrow function
const countriesToUpperCase = countries.map(country => country.toUpperCase());
*/

const countriesFirstThreeLetters = countries.map((country) =>
    country.toUpperCase().slice(0, 3)
)
//  ["ALB", "BOL", "CAN", "DEN", "ETH", "FIN", "GER", "HUN", "IRE", "JAP", "KEN"]

// filter Method
//Filter countries containing land
const countriesContainingLand = countries.filter((country) =>
    country.includes('land')
)
console.log(countriesContainingLand)
// ['Finland', 'Ireland']

const countriesEndsByia = countries.filter((country) => country.endsWith('ia'))
console.log(countriesEndsByia)
// ['Albania', 'Bolivia','Ethiopia']

const countriesHaveFiveLetters = countries.filter(
    (country) => country.length === 5
)
console.log(countriesHaveFiveLetters)
// ['Japan', 'Kenya']

const scores = [
    { name: 'Asabeneh', score: 95 },
    { name: 'Lidiya', score: 98 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
]
const scoresGreaterEighty = scores.filter((score) => score.score > 80)
console.log(scoresGreaterEighty)
// [{name: 'Asabeneh', score: 95}, { name: 'Lidiya', score: 98 },{name: 'Martha', score: 85},{name: 'John', score: 100}]

// reduce Method
const numbers3 = [1, 2, 3, 4, 5]
const sum1 = numbers3.reduce((acc, cur) => acc + cur, 0)
console.log(sum1) // 15

// every Method
const names1 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areAllStr = names1.every((name) => typeof name === 'string') // Are all strings?
console.log(areAllStr) // true

const bools = [true, true, true, true]
const areAllTrue = bools.every((b) => b === true) // Are all true? 
console.log(areAllTrue) // true

// find Method
const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)
console.log(age) // 18

const name2 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const result = names2.find((name) => name.length > 7)
console.log(result) // Asabeneh

const scores1 = [
    { name: 'Asabeneh', score: 95 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
]
const score = scores1.find((user) => user.score > 80)
console.log(score) // { name: 'Asabeneh', score: 95 }

// findIndex Method
const names2 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const ages2 = [24, 22, 25, 32, 35, 18]
const result2 = names.findIndex((name) => name.length > 7)
console.log(result2) // 0
const age2 = ages.findIndex((age) => age < 20)
console.log(age2) // 5

// some Method
const names3 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const bools3 = [true, true, true, true]
const areSomeTrue = bools3.some((b) => b === true)
console.log(areSomeTrue) //true

const areAllStr2 = names.some((name) => typeof name === 'number') // Are all strings ?
console.log(areAllStr2) // false

// sort Method
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
//Now the original products array  is also sorted

const numbers4 = [9.81, 3.14, 100, 37]
// Using sort method to sort number items provide a wrong result. see below
console.log(numbers4.sort()) //[100, 3.14, 37, 9.81]
numbers4.sort(function (a, b) {
    return a - b
})
console.log(numbers4) // [3.14, 9.81, 37, 100]

numbers4.sort(function (a, b) {
    return b - a
})
console.log(numbers4) //[100, 37, 9.81, 3.14]

objArr.sort(function (a, b) {
    if (a.key < b.key) return -1
    if (a.key > b.key) return 1
    return 0
})

// or

objArr.sort(function (a, b) {
    if (a['key'] < b['key']) return -1
    if (a['key'] > b['key']) return 1
    return 0
})

const users = [
    { name: 'Asabeneh', age: 150 },
    { name: 'Brook', age: 50 },
    { name: 'Eyob', age: 100 },
    { name: 'Elias', age: 22 },
]
users.sort((a, b) => {
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
})
console.log(users) // sorted ascending
// [{…}, {…}, {…}, {…}]