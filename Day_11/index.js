// Destructuring and Spread

// Destructing Arrays
const numbers = [1, 2, 3]
let [numOne, numTwo, numThree] = numbers

console.log(numOne, numTwo, numThree) // 1 2 3
const names = ['Asabeneh', 'Brook', 'David', 'John']
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson) // Asabeneh Brook David John
const scientificConstants = [2.72, 3.14, 9.81, 37, 100]
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants

console.log(e, pi, gravity, bodyTemp, boilingTemp) // 2.72 3.14 9.81 37 100
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
const [frontEnd, backEnd] = fullStack
console.log(frontEnd) // ["HTML", "CSS", "JS", "React"]
console.log(backEnd) // ["Node", "Express", "MongoDB"] 

const names1 = [undefined, 'Brook', 'David']
let [firstPerson1 = 'Asabeneh', secondPerson1, thirdPerson1, fourthPerson1 = 'John'] = names1
console.log(firstPerson1, secondPerson1, thirdPerson1, fourthPerson1)  // Asabeneh Brook David John

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3) // 1 2 3
console.log(rest) // [4, 5, 6, 7, 8, 9, 10]

// Destructuring during iteration
const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

for (const [country, city] of countries) {
    console.log(country, city)
}
/*  Finland Helsinki
    Sweden Stockholm
    Norway Oslo */

const fullStack1 = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]

for (const [first, second, third] of fullStack1) {
    console.log(first, second, third)
}
// HTML CSS JS
// Node Express MongoDB

// Destructuring Object
const rectangle = {
    width: 20,
    height: 10,
    area: 200
}
let { width, height, area, perimeter } = rectangle

console.log(width, height, area, perimeter) // 20 10 200 undefined

// Renaming during structuring
const rectangle1 = {
    width: 20,
    height: 10,
    area: 200
}
let { width: w, height: h, area: a, perimeter: p } = rectangle1

console.log(w, h, a, p) // 20 10 200 undefined

const rectangle2 = {
    width: 20,
    height: 10,
    area: 200
}
let { width1, height1, area1, perimeter1 = 60 } = rectangle2

console.log(width1, height1, area1, perimeter1) //20 10 200 60
//Let us modify the object:width to 30 and perimeter to 80
const rectangle3 = {
    width: 30,
    height: 10,
    area: 200,
    perimeter: 80
}
let { width2, height2, area2, perimeter2 = 60 } = rectangle
console.log(width2, height2, area2, perimeter2) //30 10 200 80

// Object parameter without destructuring
// Without destructuring
const rect = {
    width: 20,
    height: 10
}
const calculatePerimeter = rectangle => {
    return 2 * (rectangle.width + rectangle.height)
}

console.log(calculatePerimeter(rect)) // 60
//with destructuring
//Another Example
const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)']
}
// Let us create a function which give information about the person object without destructuring

const getPersonInfo = obj => {
    const skills = obj.skills
    const formattedSkills = skills.slice(0, -1).join(', ')
    const languages = obj.languages
    const formattedLanguages = languages.slice(0, -1).join(', ')

    personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${obj.age
        } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${skills[skills.length - 1]
        }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

    return personInfo
}

console.log(getPersonInfo(person))

// Object parameter with destructuring
const calculatePerimeter1 = ({ width, height }) => {
    return 2 * (width + height)
}

console.log(calculatePerimeter1(rect)) // 60
// Let us create a function which give information about the person object with destructuring
const getPersonInfo1 = ({
    firstName,
    lastName,
    age,
    country,
    job,
    skills,
    languages
}) => {
    const formattedSkills = skills.slice(0, -1).join(', ')
    const formattedLanguages = languages.slice(0, -1).join(', ')

    personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${skills[skills.length - 1]
        }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

    return personInfo
}
console.log(getPersonInfo1(person))
/*
Asabeneh Yetayeh lives in Finland. He is  250 years old. He is an Instructor and Developer. He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js. He speaks Amharic, English and a little bit of Suomi(Finnish)
*/

// Destructuring object during iteration
const todoList = [
    {
        task: 'Prepare JS Test',
        time: '4/1/2020 8:30',
        completed: true
    },
    {
        task: 'Give JS Test',
        time: '4/1/2020 10:00',
        completed: false
    },
    {
        task: 'Assess Test Result',
        time: '4/1/2020 1:00',
        completed: false
    }
]

for (const { task, time, completed } of todoList) {
    console.log(task, time, completed)
}
/* Prepare JS Test 4 / 1 / 2020 8: 30 true
Give JS Test 4 / 1 / 2020 10: 00 false
Assess Test Result 4 / 1 / 2020 1: 00 false */

// Spread or Rest Operator
// Spread operator to get the rest of array elements
const nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num4, num5, num6, ...rest1] = nums

console.log(num4, num5, num6)
console.log(rest1)
// 1 2 3
// [4, 5, 6, 7, 8, 9, 10]
const countries2 = [
    'Germany',
    'France',
    'Belgium',
    'Finland',
    'Sweden',
    'Norway',
    'Denmark',
    'Iceland'
]

let [gem, fra, , ...nordicCountries] = countries2
console.log(gem) // Germany
console.log(fra) // France
console.log(nordicCountries) // ["Finland", "Sweden", "Norway", "Denmark", "Iceland"]

// Spread operator to copy array
const evens = [0, 2, 4, 6, 8, 10]
const evenNumbers = [...evens]
const odds = [1, 3, 5, 7, 9]
const oddNumbers = [...odds]
const wholeNumbers = [...evens, ...odds]
console.log(evenNumbers) // [0, 2, 4, 6, 8, 10]
console.log(oddNumbers) // [1, 3, 5, 7, 9]
console.log(wholeNumbers) // [0, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9]

const frontEnd1 = ['HTML', 'CSS', 'JS', 'React']
const backEnd1 = ['Node', 'Express', 'MongoDB']
const fullStack2 = [...frontEnd1, ...backEnd1]
console.log(fullStack2) // ["HTML", "CSS", "JS", "React", "Node", "Express", "MongoDB"]

// Spread operator to copy object
const user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki'
}

const copiedUser = { ...user }
console.log(copiedUser)
// {name: "Asabeneh", title: "Programmer", country: "Finland", city: "Helsinki"}

const user1 = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki'
}
const copiedUser1 = { ...user1, title: 'instructor' }
console.log(copiedUser1)
// {name: "Asabeneh", title: "instructor", country: "Finland", city: "Helsinki"}

// Spread operator with arrow function

const sumAllNums = (...args) => {
    console.log(args)
}
sumAllNums(1, 2, 3, 4, 5) // [1, 2, 3, 4, 5]


const sumAllNums1 = (...args) => {
    let sum = 0
    for (const num of args) {
        sum += num
    }
    return sum

}
console.log(sumAllNums1(1, 2, 3, 4, 5)) // 15