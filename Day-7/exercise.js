// Declare a function fullName and it print out your full name.
function fullName() {
    console.log("Jeet Kavthiya")
}

// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName) {
    let name = firstName + " " + lastName
    return name
}

// Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(a, b) {
    let sum = a + b
    return sum
}

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width) {
    let area = length * width
    return area
}

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(radius) {
    let area = 3.14 * r ** 2
    return area
}

// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function season(month) {
    if (month == "September" || month == "October" || month == "November") {
        return 'Autumn'
    } else if (month == "December" || month == "January" || month == "February") {
        return 'Winter'
    } else if (month == "March" || month == "April" || month == "May") {
        return 'Spring'
    } else if (month == "June" || month == "July" || month == "August") {
        return 'Summer'
    }
}

// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax(a, b, c) {
    if (a > b && a > c) {
        return a
    } else if (b > a && b > c) {
        return b
    } else {
        return c
    }
}