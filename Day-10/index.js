// Sets

// Creating an empty set
const companies = new Set()
console.log(companies) // Ste(0) {}

// Creating set from array
const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
]

const setOfLanguages = new Set(languages)
console.log(setOfLanguages) // Set(4) {"English", "Finnish", "French", "Spanish"}

// Adding an element to a set
const companies1 = new Set() // creating an empty set
console.log(companies1.size) // 0

companies1.add('Google') // add element to the set
companies1.add('Facebook')
companies1.add('Amazon')
companies1.add('Oracle')
companies1.add('Microsoft')
console.log(companies1.size) // 5 elements in the set
console.log(companies1) // Set(5) {"Google", "Facebook", "Amazon", "Oracle", "Microsoft"}

const companies2 = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
setOfCompanies = new Set()
for (const company of companies2) {
    setOfCompanies.add(company)
}

// Deleting an element in the set
console.log(companies2.delete('Google'))
console.log(companies2.size) // 4 elements left in the set

// Checking an element in the set
console.log(companies.has('Apple')) // false
console.log(companies.has('Facebook')) // true

// Clearing the set
companies.clear()
console.log(companies) // Set(0) {}

const languages2 = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
]
const langSet = new Set(languages2)
console.log(langSet) // Set(4) {"English", "Finnish", "French", "Spanish"}
console.log(langSet.size) // 4

const counts = []
const count = {}

for (const l of langSet) {
    const filteredLang = languages.filter((lng) => lng === l)
    console.log(filteredLang) // ["English", "English", "English"]
    counts.push({ lang: l, count: filteredLang.length })
}
console.log(counts)
/* [
    { lang: 'English', count: 3 },
    { lang: 'Finnish', count: 1 },
    { lang: 'French', count: 2 },
    { lang: 'Spanish', count: 1 },
] */

const numbers = [5, 3, 2, 5, 5, 9, 4, 5]
const setOfNumbers = new Set(numbers)
console.log(setOfNumbers) // Set(5) {5, 3, 2, 9, 4}

// Union of sets
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)
console.log(C) // Set(6) {1, 2, 3, 4, 5,6}

// Intersection of sets
let c1 = a.filter((num) => B.has(num))
let C1 = new Set(c1)
console.log(C1) // Set(3) {3, 4, 5}

// Difference of sets
let c2 = a.filter((num) => !B.has(num))
let C2 = new Set(c2)
console.log(C2) // Set(2) {1, 2}

// Map

// Creating an empty Map
const map = new Map()
console.log(map) // Map(0) {}

// Creating an Map from array
let countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
]
const map1 = new Map(countries)
console.log(map1) // Map(3) { "Finland" => "Helsinki", "Sweden" => "Stockholm", "Norway" => "Oslo" }
console.log(map1.size) // 3

// Adding values to the Map
const countriesMap = new Map()
console.log(countriesMap.size) // 0
countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')
console.log(countriesMap) // Map(3) {"Finland" => "Helsinki", "Sweden" => "Stockholm", "Norway" => "Oslo"}
console.log(countriesMap.size) // 3

// Getting a value from Map
console.log(countriesMap.get('Finland')) // Helsinki

// Checking key in Map
console.log(countriesMap.has('Finland')) // true

// Getting all values from map using loop

for (const country of countriesMap) {
    console.log(country)
}
/*  (2)["Finland", "Helsinki"]
    (2)["Sweden", "Stockholm"]
    (2)["Norway", "Oslo"] */
for (const [country, city] of countriesMap) {
    console.log(country, city)
}
/*  Finland Helsinki
    Sweden Stockholm
    Norway Oslo */