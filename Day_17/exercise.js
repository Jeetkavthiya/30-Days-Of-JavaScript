// Exercises : Level 1

// Store you first name, last name, age, country, city in your browser localStorage.
localStorage.setItem('firstName', 'Jeet')
localStorage.setItem('lastName', 'Patel')
localStorage.setItem('age', 22)
localStorage.setItem('country', 'India')
localStorage.setItem('city', 'Junagadh')


// Exercises: Level 2

// Create a student object.The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys.Store the student object in your browser localStorage.
const student = {
    firstName: "Jeet",
    lastName: "Patel",
    age: 22,
    skills: ['HTML', 'CSS', 'JavaScript', 'JQuery', 'NodeJS', 'MOngoDB'],
    country: "India",
}
const studentJSON = JSON.stringify(student)
localStorage.setItem('student', studentJSON)