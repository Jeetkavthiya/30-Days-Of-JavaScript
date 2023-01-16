// Class

// Defining a class
class Person {
    // code goes here
}

// Class Instantiation
class Person {
    // code goes here
}
const person = new Person()
console.log(person) // Person {}

// Class Constructor
class Person {
    constructor(firstName, lastName) {
        console.log(this) // Check the output from here
        this.firstName = firstName
        this.lastName = lastName
    }
}
const person0 = new Person()
console.log(person0) // Person {firstName: undefined, lastName:undefined}

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
}

const person1 = new Person('Asabeneh', 'Yetayeh')
console.log(person1) // Person {firstName: "Asabeneh", lastName: "Yetayeh"}

class Person {
    constructor(firstName, lastName) {
        console.log(this) // Check the output from here
        this.firstName = firstName
        this.lastName = lastName
    }
}
const person11 = new Person('Asabeneh', 'Yetayeh')
const person12 = new Person('Lidiya', 'Tekle')
const person13 = new Person('Abraham', 'Yetayeh')
console.log(person11) // Person {firstName: "Asabeneh", lastName: "Yetayeh"}
console.log(person12) // Person {firstName: "Lidiya", lastName: "Tekle"}
console.log(person13) // Person {firstName: "Abraham", lastName: "Yetayeh"}

class Person {
    constructor(firstName, lastName, age, country, city) {
        console.log(this) // Check the output from here
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
    }
}
const person2 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
console.log(person2)
// Person {firstName: "Asabeneh", lastName: "Yetayeh", age: 250, country: "Finland", city: "Helsinki"}

// Default values with constructor
class Person {
    constructor(
        firstName = 'Asabeneh',
        lastName = 'Yetayeh',
        age = 250,
        country = 'Finland',
        city = 'Helsinki'
    ) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
    }
}
const person3 = new Person() // it will take the default values
const person4 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
console.log(person3)
// Person {firstName: "Asabeneh", lastName: "Yetayeh", age: 250, country: "Finland", city: "Helsinki"}
console.log(person4)
// Person {firstName: "Lidiya", lastName: "Tekle", age: 28, country: "Finland", city: "Espoo"}

// Class Methods
class Person {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
    }
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
}
const person5 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person6 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
console.log(person5.getFullName()) // Asabeneh Yetayeh
console.log(person6.getFullName()) // Lidiya Tekle

// Properties with initial value
class Person {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
    }
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
}
const person7 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person8 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
console.log(person7.score) // 0
console.log(person8.score) // 0
console.log(person7.skills) // []
console.log(person8.skills) // []

// getter
class Person {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
    }
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
    get getScore() {
        return this.score
    }
    get getSkills() {
        return this.skills
    }
}
const person9 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person10 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
console.log(person9.getScore) // 0
console.log(person10.getScore) // 0
console.log(person9.getSkills) // []
console.log(person10.getSkills) // []

// setter
class Person {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
    }
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
    get getScore() {
        return this.score
    }
    get getSkills() {
        return this.skills
    }
    set setScore(score) {
        this.score += score
    }
    set setSkill(skill) {
        this.skills.push(skill)
    }
}

const person14 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person15 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
person14.setScore = 1
person14.setSkill = 'HTML'
person14.setSkill = 'CSS'
person14.setSkill = 'JavaScript'
person15.setScore = 1
person15.setSkill = 'Planning'
person15.setSkill = 'Managing'
person15.setSkill = 'Organizing'
console.log(person14.score) // 1
console.log(person15.score) // 1
console.log(person14.skills) // ["HTML", "CSS", "JavaScript"]
console.log(person15.skills) // ["Planning", "Managing", "Organizing"]

class Person {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
    }
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
    get getScore() {
        return this.score
    }
    get getSkills() {
        return this.skills
    }
    set setScore(score) {
        this.score += score
    }
    set setSkill(skill) {
        this.skills.push(skill)
    }
    getPersonInfo() {
        let fullName = this.getFullName()
        let skills =
            this.skills.length > 0 &&
            this.skills.slice(0, this.skills.length - 1).join(', ') +
            ` and ${this.skills[this.skills.length - 1]}`
        let formattedSkills = skills ? `He knows ${skills}` : ''

        let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
        return info
    }
}
const person16 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person17 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
const person18 = new Person('John', 'Doe', 50, 'Mars', 'Mars city')
person16.setScore = 1
person16.setSkill = 'HTML'
person16.setSkill = 'CSS'
person16.setSkill = 'JavaScript'
person17.setScore = 1
person17.setSkill = 'Planning'
person17.setSkill = 'Managing'
person17.setSkill = 'Organizing'
console.log(person16.getScore) // 1
console.log(person17.getScore) // 1
console.log(person16.getSkills) // ["HTML", "CSS", "JavaScript"]
console.log(person17.getSkills) // ["Planning", "Managing", "Organizing"]
console.log(person18.getSkills) // []
console.log(person16.getPersonInfo())
// Asabeneh Yetayeh is 250. He lives Helsinki, Finland. He knows HTML, CSS and JavaScript
console.log(person17.getPersonInfo())
// Lidiya Tekle is 28. He lives Espoo, Finland.He knows Planning, Managing and Organizing
console.log(person18.getPersonInfo())
// John Doe is 50. He lives Mars city, Mars.

// Static Method
class Person {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
    }
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
    get getScore() {
        return this.score
    }
    get getSkills() {
        return this.skills
    }
    set setScore(score) {
        this.score += score
    }
    set setSkill(skill) {
        this.skills.push(skill)
    }
    getPersonInfo() {
        let fullName = this.getFullName()
        let skills =
            this.skills.length > 0 &&
            this.skills.slice(0, this.skills.length - 1).join(', ') +
            ` and ${this.skills[this.skills.length - 1]}`

        let formattedSkills = skills ? `He knows ${skills}` : ''

        let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
        return info
    }
    static favoriteSkill() {
        const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
        const index = Math.floor(Math.random() * skills.length)
        return skills[index]
    }
    static showDateTime() {
        let now = new Date()
        let year = now.getFullYear()
        let month = now.getMonth() + 1
        let date = now.getDate()
        let hours = now.getHours()
        let minutes = now.getMinutes()
        if (hours < 10) {
            hours = '0' + hours
        }
        if (minutes < 10) {
            minutes = '0' + minutes
        }

        let dateMonthYear = date + '.' + month + '.' + year
        let time = hours + ':' + minutes
        let fullTime = dateMonthYear + ' ' + time
        return fullTime
    }
}
console.log(Person.favoriteSkill()) // Node
console.log(Person.showDateTime()) // 15.1.2020 23:56

// Inheritance
class ChildClassName extends Person {
    // code goes here
}

class Student extends Person {
    saySomething() {
        console.log('I am a child of the person class')
    }
}
const s1 = new Student('Asabeneh', 'Yetayeh', 'Finland', 250, 'Helsinki')
console.log(s1) // Student {firstName: "Asabeneh", lastName: "Yetayeh", age: "Finland", country: 250, city: "Helsinki", …}
console.log(s1.saySomething()) // I am a child of the person class
console.log(s1.getFullName()) // Asabeneh Yetayeh
console.log(s1.getPersonInfo()) // Student {firstName: "Asabeneh", lastName: "Yetayeh", age: "Finland", country: 250, city: "Helsinki", …}
// Asabeneh Yetayeh is Finland.He lives Helsinki, 250.

// Overriding methods
class Student extends Person {
    constructor(firstName, lastName, age, country, city, gender) {
        super(firstName, lastName, age, country, city)
        this.gender = gender
    }

    saySomething() {
        console.log('I am a child of the person class')
    }
    getPersonInfo() {
        let fullName = this.getFullName()
        let skills =
            this.skills.length > 0 &&
            this.skills.slice(0, this.skills.length - 1).join(', ') +
            ` and ${this.skills[this.skills.length - 1]}`

        let formattedSkills = skills ? `He knows ${skills}` : ''
        let pronoun = this.gender == 'Male' ? 'He' : 'She'

        let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
        return info
    }
}

const S1 = new Student(
    'Asabeneh',
    'Yetayeh',
    250,
    'Finland',
    'Helsinki',
    'Male'
)
const s2 = new Student('Lidiya', 'Tekle', 28, 'Finland', 'Helsinki', 'Female')
s1.setScore = 1
s1.setSkill = 'HTML'
s1.setSkill = 'CSS'
s1.setSkill = 'JavaScript'
s2.setScore = 1
s2.setSkill = 'Planning'
s2.setSkill = 'Managing'
s2.setSkill = 'Organizing'
console.log(S1)
console.log(S1.saySomething())
console.log(S1.getFullName())
console.log(S1.getPersonInfo())
console.log(s2.saySomething())
console.log(s2.getFullName())
console.log(s2.getPersonInfo())
/*  Student {firstName: "Asabeneh", lastName: "Yetayeh", age: 250, country: "Finland", city: "Helsinki", …}
    Student {firstName: "Lidiya", lastName: "Tekle", age: 28, country: "Finland", city: "Helsinki", …}
    I am a child of the person class
    Asabeneh Yetayeh
    Student {firstName: "Asabeneh", lastName: "Yetayeh", age: 250, country: "Finland", city: "Helsinki", …}
    Asabeneh Yetayeh is 250. He lives in Helsinki, Finland. He knows HTML, CSS and JavaScript
    I am a child of the person class
    Lidiya Tekle
    Student {firstName: "Lidiya", lastName: "Tekle", age: 28, country: "Finland", city: "Helsinki", …}
    Lidiya Tekle is 28. She lives in Helsinki, Finland. He knows Planning, Managing and Organizing */