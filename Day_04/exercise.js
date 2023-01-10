// Exercise : Level 1

// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let age = prompt("Enter your age : ")
if (age > 18) {
    console.log('You are old enough to drive')
} else {
    console.log(`Wait for ${18 - age} to drive`)
}

// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let myAge = prompt('Enter my age : ')
let yourAge = prompt('Enter your age : ')
if (myAge > yourAge) {
    console.log('I am older than you')
} else {
    console.log('You are older than me')
}

// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
let a = 4
let b = 3
if (a > b) {
    console.log('a is greater than b')
} else {
    console.log('b is greater than a')
}
a > b ? console.log('a is greater than b') : console.log('b is greater than a')

// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let num = prompt('Enter number : ')
if (num % 2 == 0) {
    console.log(`${num} is even number`)
} else {
    console.log(`${num} is odd number`)
}


// Exercises : Level 2

// Write a code which can give grades to students according to theirs scores:
let marks = prompt('Enter Marks : ')
if (marks >= 80 && marks < 100) {
    console.log('A')
} else if (marks >= 70 && marks < 80) {
    console.log('B')
} else if (marks >= 60 && marks < 70) {
    console.log('C')
} else if (marks >= 50 && marks < 60) {
    console.log('D')
} else if (marks >= 0 && marks < 50) {
    console.log('F')
}

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
let month = prompt('Enter a month : ')
if (month == "September" || month == "October" || month == "November") {
    console.log('Autumn')
} else if (month == "December" || month == "January" || month == "February") {
    console.log('Winter')
} else if (month == "March" || month == "April" || month == "May") {
    console.log('Spring')
} else if (month == "June" || month == "July" || month == "August") {
    console.log('Summer')
}

// Check if a day is weekend day or a working day. Your script will take day as an input.
let day = prompt('Enter day : ').toLowerCase()
if (day == "saturday" || day == "sunday") {
    console.log(`${day} is weekend`)
} else {
    console.log(`${day} is working day`)
}