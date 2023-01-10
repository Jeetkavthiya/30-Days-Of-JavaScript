// Exercises : Level 1

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

// Use forEach to console.log each country in the countries array.
countries.forEach((data) => {
    console.log(data)
})

// Use forEach to console.log each name in the names array.
names.forEach((data) => {
    console.log(data)
})

// Use forEach to console.log each number in the numbers array.
numbers.forEach((data) => {
    console.log(data)
})

// Use map to create a new array by changing each country to uppercase in the countries array.
const upperCase = countries.map((data) => {
    data.toUpperCase()
})

// Use map to map the products array to its corresponding prices.
const prices = products.map((data) => {
    data.price
})

// Use filter to filter out countries having six character.
const countriesWithSixLetters = countries.filter((data) => {
    data.length == 6
})

// Use filter to filter out country start with 'E';
const countriesStartWithE = countries.filter((data) => {
    data.startsWith('E')
})

// Use reduce to sum all the numbers in the numbers array.
const sum = numbers.reduce((acc, cur) => {
    acc + cur
}, 0)

// Use some to check if some names' length greater than seven in names array
const isGraterthanSeven = names.some((data) => {
    data.length > 7
})

// Use every to check if all the countries contain the word land
const isContainLand = countries.every((data) => {
    data.includes('land')
})

// Use find to find the first country containing only six letters in the countries array
const countryContainingSixLetter = countries.find((data) => {
    data.length == 6
})

// Use findIndex to find the position of the first country containing only six letters in the countries array
const positionOfSixLetterCountry = countries.findIndex((data) => {
    data.length == 6
})

// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const positionOfNorway = countries.findIndex((data) => {
    data == 'Norway'
})