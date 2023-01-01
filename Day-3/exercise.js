// Exercises : Level 1

// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "Jeet"
let lastName = "Kavthiya"
let country = "India"
let city = "Junagadh"
let age = 22
let isMarried = false
let year = 2023
console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)

// Check if type of '10' is equal to 10
console.log(typeof '10' == typeof 10)

// Check if parseInt('9.8') is equal to 10
console.log(parseInt(9.8) == 10)

// Boolean value is either true or false.
// Write three JavaScript statement which provide truthy value.
// Write three JavaScript statement which provide falsy value.
console.log(21 > 20)
console.log(12 < 30)
console.log('Hello' == 'Hello')
console.log('21' === 21)
console.log(21 < 20)
console.log(12 > 20)

// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')
console.log('python'.length > 'jargon'.length)

// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
console.log(!('python'.includes('on')) && !('jargon'.includes('on')))

// Use the Date object to do the following activities
let now = new Date()
console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getTime())


// Exersices : Level 2

// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = prompt('Enter Base : ')
let height = prompt('Enter Height : ')
console.log(0.5 * base * height)

// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let a = prompt("Enter Side a :")
let b = prompt("Enter Side b :")
let c = prompt("Enter Side c :")
console.log(a + b + c)

// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = prompt("Enter Length :")
let width = prompt("Enter Width :")
console.log(2 * (length + width))

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let r = prompt("Enter Radius :")
console.log(3.14 * r * r)

// Calculate the slope, x-intercept and y-intercept of y = 2x -2
let x4 = 0
let y4 = 2 * x - 2
console.log(x4 + "," + y4)
let y3 = 0
let x3 = (y1 + 2) / 2
console.log(x3 + "," + y3)

// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let x1 = 2, y1 = 2
let x2 = 6, y2 = 10
let m = (y2 - y1) / (x2 - x1)
console.log(m)

// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let x = 0
let y = x ** 2 + 6 * x + 9
console.log(y)
x = 1
y = x ** 2 + 6 * x + 9
console.log(y)
x = 2
y = x ** 2 + 6 * x + 9
console.log(y)
x = 3
y = x ** 2 + 6 * x + 9
console.log(y)