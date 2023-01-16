// Local Storage

// Setting item to the localStorage
//syntax
localStorage.setItem('key', 'value')

// Storing string in a localStorage
localStorage.setItem('firstName', 'Asabeneh') // since the value is string we do not stringify it
console.log(localStorage)
// Storage {firstName: 'Asabeneh', length: 1}

// Storing number in a local storage
localStorage.setItem('age', 200)
console.log(localStorage)
// Storage { age: '200', firstName: 'Asabeneh', length: 2 }

// Storing an array in a localStorage
const skill = ['HTML', 'CSS', 'JS', 'React']
//Skills array has to be stringified first to keep the format.
const skillsJSON = JSON.stringify(skill, undefined, 4)
localStorage.setItem('skills', skillsJSON)
console.log(localStorage)
// Storage {age: '200', firstName: 'Asabeneh', skills: 'HTML,CSS,JS,React', length: 3}

let skills = [
    { tech: 'HTML', level: 10 },
    { tech: 'CSS', level: 9 },
    { tech: 'JS', level: 8 },
    { tech: 'React', level: 9 },
    { tech: 'Redux', level: 10 },
    { tech: 'Node', level: 8 },
    { tech: 'MongoDB', level: 8 }
]
let skillJSON = JSON.stringify(skills)
localStorage.setItem('skills', skillJSON)

// Storing an object in a localStorage
const user = {
    firstName: 'Asabeneh',
    age: 250,
    skills: ['HTML', 'CSS', 'JS', 'React']
}
const userText = JSON.stringify(user, undefined, 4)
localStorage.setItem('user', userText)

// Getting item from localStorage
//syntax
localStorage.getItem('key')

let firstName1 = localStorage.getItem('firstName')
let age1 = localStorage.getItem('age')
let skills1 = localStorage.getItem('skills')
console.log(firstName1, age1, skills1)
// 'Asabeneh', '200', '['HTML','CSS','JS','React']'

let skills2 = localStorage.getItem('skills')
let skillsObj = JSON.parse(skills2, undefined, 4)
console.log(skillsObj)
// ['HTML','CSS','JS','React']

// Clearing the localStorage
localStorage.clear()