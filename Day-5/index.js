// Using Square Brackets
const arr = []
console.log(arr)

// Array With Values
const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries
// Print the array and its length
console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)
console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)
console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)
console.log('Animal products:', animalProducts)
console.log('Number of animal products:', animalProducts.length)
console.log('Web technologies:', webTechs)
console.log('Number of web technologies:', webTechs.length)
console.log('Countries:', countries)
console.log('Number of countries:', countries.length)
const arr1 = ['Asabeneh', 250, true, { country: 'Finland', city: 'Helsinki' }, { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }] // arr containing different data types
console.log(arr1)

// Creating Array Using Split()
let js = 'JavaScript'
const charsInJavaScript = js.split('')
console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')
console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
let txt = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.split(' ')
console.log(words)
// the text has special characters think how you can just get only the words
// ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]

// Accessing Array Items Using Index
const fruits1 = ['banana', 'orange', 'mango', 'lemon']
let firstFruit = fruits1[0] // we are accessing the first item using its index
console.log(firstFruit) // banana
secondFruit = fruits1[1]
console.log(secondFruit) // orange
let lastFruit = fruits1[3]
console.log(lastFruit) // lemon
// Last index can be calculated as follows
let lastIndex = fruits1.length - 1
lastFruit = fruits1[lastIndex]
console.log(lastFruit)  // lemon
const numbers1 = [0, 3.14, 9.81, 37, 98.6, 100]  // set of numbers
console.log(numbers1.length)  // => to know the size of the array, which is 6
console.log(numbers1)         // -> [0, 3.14, 9.81, 37, 98.6, 100]
console.log(numbers1[0])      //  -> 0
console.log(numbers1[5])      //  -> 100
let lastIndex1 = numbers1.length - 1;
console.log(numbers1[lastIndex1]) // -> 100

// Modifying Array Element
const numbers2 = [1, 2, 3, 4, 5]
numbers2[0] = 10      // changing 1 at index 0 to 10
numbers2[1] = 20      // changing  2 at index 1 to 20
console.log(numbers2) // [10, 20, 3, 4, 5]
const countries1 = ['Albania', 'Canada', 'Bolivia', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']
countries1[0] = 'Afghanistan'  // Replacing Albania by Afghanistan
let lastIndex2 = countries1.length - 1
countries[lastIndex2] = 'Korea' // Replacing Kenya by Korea
console.log(countries1)

// Methods To Manipulate Array

// Array Constructor
const arr2 = Array() // creates an an empty array
console.log(arr2)
const eightEmptyValues = Array(8) // it creates eight empty values
console.log(eightEmptyValues) // [empty x 8]

// Creating static values with fill
const arr3 = Array() // creates an an empty array
console.log(arr3)
const eightXvalues = Array(8).fill('X') // it creates eight element values filled with 'X'
console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']
const eight0values = Array(8).fill(0) // it creates eight element values filled with '0'
console.log(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]
const four4values = Array(4).fill(4) // it creates 4 element values filled with '4'
console.log(four4values) // [4, 4, 4, 4]

// Concatenating array using concat
const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)
console.log(thirdList) // [1, 2, 3, 4, 5, 6]

// Getting array length
const numbers2 = [1, 2, 3, 4, 5]
console.log(numbers2.length) // -> 5 is the size of the array

// Getting index an element in arr array
const numbers3 = [1, 2, 3, 4, 5]
console.log(numbers3.indexOf(5)) // -> 4
console.log(numbers3.indexOf(0)) // -> -1
console.log(numbers3.indexOf(1)) // -> 0
console.log(numbers3.indexOf(6)) // -> -1

// Getting last index of an element in array
const numbers4 = [1, 2, 3, 4, 5, 3, 1, 2]
console.log(numbers4.lastIndexOf(2)) // 7
console.log(numbers4.lastIndexOf(0)) // -1
console.log(numbers4.lastIndexOf(1)) //  6
console.log(numbers4.lastIndexOf(4)) //  3
console.log(numbers4.lastIndexOf(6)) // -1

// To check if an item exist in an array
const numbers5 = [1, 2, 3, 4, 5]
console.log(numbers5.includes(5)) // true
console.log(numbers5.includes(0)) // false
console.log(numbers5.includes(1)) // true
console.log(numbers5.includes(6)) // false
const webTechs1 = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'] // List of web technologies
console.log(webTechs.includes('Node'))  // true
console.log(webTechs.includes('C'))     // false

// Checking array
const numbers6 = [1, 2, 3, 4, 5]
console.log(Array.isArray(numbers6)) // true
const number = 100
console.log(Array.isArray(number)) // false

// Converting array to string
const numbers7 = [1, 2, 3, 4, 5]
console.log(numbers7.toString()) // 1,2,3,4,5
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook

// Joining array elements
const numbers8 = [1, 2, 3, 4, 5]
console.log(numbers8.join()) // 1,2,3,4,5
const names1 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(names1.join()) // Asabeneh,Mathias,Elias,Brook
console.log(names1.join('')) //AsabenehMathiasEliasBrook
console.log(names1.join(' ')) //Asabeneh Mathias Elias Brook
console.log(names1.join(', ')) //Asabeneh, Mathias, Elias, Brook
console.log(names1.join(' # ')) //Asabeneh # Mathias # Elias # Brook
const webTechs2 = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'] // List of web technologies
console.log(webTechs2.join())       // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
console.log(webTechs2.join(' # '))  // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"

// Slice array elements
const numbers9 = [1, 2, 3, 4, 5]
console.log(numbers9.slice()) // -> it copies all  item
console.log(numbers9.slice(0)) // -> it copies all  item
console.log(numbers9.slice(0, numbers9.length)) // it copies all  item
console.log(numbers9.slice(1, 4)) // -> [2,3,4] // it doesn't include the ending position

// Splice method in array
const numbers0 = [1, 2, 3, 4, 5]
console.log(numbers0.splice())                // -> remove all items
console.log(numbers0.splice(0, 1))            // remove the first item
console.log(numbers.splice(3, 3, 7, 8, 9))  // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items

// Adding item to an array using push
const arr4 = ['item1', 'item2', 'item3']
arr4.push('new item')
console.log(arr4) // ['item1', 'item2','item3','new item']

// Removing the end element using pop
const numbers10 = [1, 2, 3, 4, 5]
numbers10.pop() // -> remove one item from the end
console.log(numbers10) // -> [1,2,3,4]

// Removing an element from the beginning
const numbers11 = [1, 2, 3, 4, 5]
numbers11.shift() // -> remove one item from the beginning
console.log(numbers11) // -> [2,3,4,5]

// Add an element from the beginning
const numbers12 = [1, 2, 3, 4, 5]
numbers12.unshift(0) // -> add one item from the beginning
console.log(numbers12) // -> [0,1,2,3,4,5]

// Reversing array order
const numbers13 = [1, 2, 3, 4, 5]
numbers13.reverse() // -> reverse array order
console.log(numbers13) // [5, 4, 3, 2, 1]
numbers13.reverse()
console.log(numbers13) // [1, 2, 3, 4, 5]

// Sorting elements in array
const webTechs3 = ['CSS', 'HTML', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']
webTechs3.sort()
console.log(webTechs3) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]
webTechs3.reverse() // after sorting we can reverse it
console.log(webTechs3) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]

// Array of arrays
const firstNums = [1, 2, 3]
const secondNums = [1, 4, 9]
const arrayOfArray = [[1, 2, 3], [1, 2, 3]]
console.log(arrayOfArray[0]) // [1, 2, 3]
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = [frontEnd, backEnd]
console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
console.log(fullStack.length)  // 2
console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]