// Exercise: Level 1

// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days Of JavaScript'

// Print the string on the browser console using console.log()
console.log(challenge)

// Print the length of the string on the browser console using console.log()
console.log(challenge.length)

// Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase())

// Change all the string characters to lowercase letters using toLowerCase() method 
console.log(challenge.toLowerCase())

// Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substr(0, 2))

// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.substring(4))

// Check if the string contains a word Script using includes() method
console.log(challenge.includes('String'))

// Split the string into an array using split() method
console.log(challenge.split(""))

// Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(" "))

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let company = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(company.split(", "))

// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace("JavaScript", "Python"))

// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15))

// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt(11))

// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('a'))

// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a'))

// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let statement = 'You cannot end a sentence with because because because is a conjunction'
console.log(statement.indexOf('because'))

// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(statement.lastIndexOf('because'))

// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(statement.search('because'))

// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let string = ' 30 Days Of JavaScript '
console.log(string.trim())

// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith('30'))

// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith("JavaScript"))

// Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match(a))

// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let s1 = '30 Days of'
let s2 = 'JavaScript'
console.log(s1.concat(" " + s2))

// Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(3))


// Exercise: Level 2

// Using console.log() print out the following statement:
console.log(`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`)

// Using console.log() print out the following quote by Mother Teresa:
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof '10' == typeof 10)
console.log(typeof Number('10') == typeof 10)

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(parseFloat(9.8) == 10)
console.log(Math.round(9.8) == 10)

// Check if 'on' is found in both python and jargon
console.log("python".includes('on'))
console.log("jargon".includes('on'))

// I hope this course is not full of jargon. Check if jargon is in the sentence.
let st = 'I hope this course is not full of jargon'
console.log(st.includes('jargon'))

// Generate a random number between 0 and 100 inclusively.
console.log(Math.floor(Math.random() * 101))

// Generate a random number between 50 and 100 inclusively.
console.log(Math.floor(Math.random() * 51) + 50)

// Generate a random number between 0 and 255 inclusively.
console.log(Math.floor(Math.random() * 256))

// Access the 'JavaScript' string characters using a random number.
let st1 = 'JavaScript'
console.log(st1[Math.floor(Math.random() * (st1.length + 1))])

// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.slice(32, 55))