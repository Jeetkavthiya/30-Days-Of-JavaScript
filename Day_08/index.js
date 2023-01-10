// Window Global Object
//scope.js
a = 'JavaScript' // declaring a variable without let or const make it available in window object and this found anywhere
b = 10 // this is a global scope variable and found in the window object
function letsLearnScope() {
    console.log(a, b)
    if (true) {
        console.log(a, b)
    }
}
console.log(a, b) // accessible

// Global Scope
//scope.js
let a = 'JavaScript' // is a global scope it will be found anywhere in this file
let b = 10 // is a global scope it will be found anywhere in this file
function letsLearnScope() {
    console.log(a, b) // JavaScript 10, accessible
    if (true) {
        let a = 'Python'
        let b = 100
        console.log(a, b) // Python 100
    }
    console.log(a, b)
}
letsLearnScope()
console.log(a, b) // JavaScript 10, accessible

// Local Scope
//scope.js
let a1 = 'JavaScript' // is a global scope it will be found anywhere in this file
let b1 = 10 // is a global scope it will be found anywhere in this file
// Function scope
function letsLearnScope() {
    console.log(a1, b1) // JavaScript 10, accessible
    let value = false
    // block scope
    if (true) {
        // we can access from the function and outside the function but 
        // variables declared inside the if will not be accessed outside the if block
        let a1 = 'Python'
        let b1 = 20
        let c = 30
        let d = 40
        value = !value
        console.log(a1, b1, c, value) // Python 20 30 true
    }
    // we can not access c because c's scope is only the if block
    console.log(a1, b1, value) // JavaScript 10 true
}
letsLearnScope()
console.log(a1, b1) // JavaScript 10, accessible

//scope.js
function letsLearnScope() {
    var gravity = 9.81
    console.log(gravity)

}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined
if (true) {
    var gravity = 9.81
    console.log(gravity) // 9.81
}
console.log(gravity)  // 9.81
for (var i = 0; i < 3; i++) {
    console.log(i) // 0, 1, 2
}
console.log(i) // 3

//scope.js
function letsLearnScope() {
    // you can use let or const, but gravity is constant I prefer to use const
    const gravity = 9.81
    console.log(gravity)

}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined
if (true) {
    const gravity = 9.81
    console.log(gravity) // 9.81
}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined
for (let i = 0; i < 3; i++) {
    console.log(i) // 0, 1, 2
}
// console.log(i), Uncaught ReferenceError: i is not defined

// Object
// An Empty Object
const person = {}

// Creating an objecting with values
const rectangle = {
    length: 20,
    width: 20
}
console.log(rectangle) // {length: 20, width: 20}
const person1 = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
    ],
    isMarried: true,
    getFullName: function () {
        return `${this.firstName}${this.lastName}`
    },
    'phone number': '+3584545454545'
}
console.log(person1)

// Getting values from an object
// accessing values using .
console.log(person1.firstName)
console.log(person1.lastName)
console.log(person1.age)
console.log(person1.location) // undefined
// value can be accessed using square bracket and key name
console.log(person1['firstName'])
console.log(person1['lastName'])
console.log(person1['age'])
console.log(person1['age'])
console.log(person1['location']) // undefined
// for instance to access the phone number we only use the square bracket method
console.log(person1['phone number'])

// Setting new key for an object
const person2 = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
    ],
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`
    }
}
person2.nationality = 'Ethiopian'
person2.country = 'Finland'
person2.title = 'teacher'
person2.skills.push('Meteor')
person2.skills.push('SasS')
person2.isMarried = true
person2.getPersonInfo = function () {
    let skillsWithoutLastSkill = this.skills
        .splice(0, this.skills.length - 1)
        .join(', ')
    let lastSkill = this.skills.splice(this.skills.length - 1)[0]
    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
    return statement
}
console.log(person2)
console.log(person2.getPersonInfo())

// Getting object keys using Object.keys()
const copyPerson = Object.assign({}, person2)
console.log(copyPerson)
const keys = Object.keys(copyPerson)
console.log(keys) //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']
const address = Object.keys(copyPerson.address)
console.log(address) //['street', 'pobox', 'city']

// Getting object values using Object.values()
const values = Object.values(copyPerson)
console.log(values)

// Getting object keys and values using Object.entries()
const entries = Object.entries(copyPerson)
console.log(entries)

// Checking properties using hasOwnProperty()
console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('score'))