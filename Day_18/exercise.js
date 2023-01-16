const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// Exercises : Level 1

// Read the countries API using fetch and print the name of country, capital, languages, population and area.
fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.error(error))


// Exercises: Level 2

// Print out all the cat names in to catNames variable.
fetch(catsAPI)
    .then(response => response.json())
    .then(data => {
        console.log(data.name)
    })
    .catch(error => console.error(error)) 