// Exercises : Level 1

// Display the countries array as a table
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]
console.table(countries)

// Display the user object as a table
const user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
}
console.table(user)

// Use console.group() to group logs
console.group('Countries')
console.log(countries)
console.groupEnd()

// Exercises : Level 2

// 10 > 2 * 10 use console.assert()
console.assert(10 > 2, '10')

// Write a warning message using console.warn()
console.warn("Warning")

// Write an error message using console.error()
console.error("Error");