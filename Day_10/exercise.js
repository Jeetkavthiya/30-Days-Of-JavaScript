const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

// Exercises : Level 1

// create an empty set
const emptySet = new Set()

// Create a set containing 0 to 10 using loop
const setContainingNumber = new Set()
for (let i = 0; i < 10; i++) {
    setContainingNumber.add(i)
}

// Remove an element from a set
setContainingNumber.delete(5)

// Clear a set
setContainingNumber.clear()

// Create a set of 5 string elements from array
const arr = ['Jeet', 'Meet', 'Jigar', 'Milan', 'kunj']
const setOfStrings = new Set(arr)

// Create a map of countries and number of characters of a country
const mapOfCountries = new Map(countries)

// Exercises : Level 2

// Find a union b
const unionArray = [...a, ...b]
const unionSet = new Set(unionArray)

// Find a intersection b
const intersectionArray = a.filter((num) => B.has(num))
const intersectionSet = new Set(intersectionArray)