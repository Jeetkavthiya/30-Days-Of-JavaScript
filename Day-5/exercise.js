// Exercises : Level 1

// Declare an empty array;
const emptyArr = []

// Declare an array with more than 5 number of elements
const fiveElem = [1, 2, 3, 4, 5]

// Find the length of your array
console.log(fiveElem.length)

// Get the first item, the middle item and the last item of the array
console.log(fiveElem[0])
console.log(fiveElem[2])
console.log(fiveElem[4])

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [1, null, 'Jeet', [1, 2, 3], { name: 'Jeet' }, false]

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// Print the array using console.log()
console.log(itCompanies)

// Print the number of companies in the array
console.log(itCompanies.length)

// Print the first company, middle and last company
console.log(itCompanies[0])
console.log(itCompanies[length / 2])
console.log(itCompanies[length - 1])

// Print out each company
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i])
}

// Change each company name to uppercase one by one and print them out
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i].toUpperCase())
}

// Sort the array using sort() method
console.log(itCompanies.sort())

// Reverse the array using reverse() method
console.log(itCompanies.reverse())

// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3))

// Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3))

// Remove the first IT company from the array
console.log(itCompanies.shift())

// Remove the last IT company from the array
console.log(itCompanies.pop())


// Exercises : Level 2

// First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(words)
console.log(words.length)
const arr = text.split(" ")
console.log(arr)
console.log(arr.length)

// In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift('Meat')
// add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push('Sugar')
// remove 'Honey' if you are allergic to honey
shoppingCart.pop()
// modify Tea to 'Green Tea'
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea'

// Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd + backEnd
console.log(fullStack)