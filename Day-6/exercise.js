// Exercises : Level 1

// Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let i = 0; i < 10; i++) {
    console.log(i)
}
let i = 0;
while (i < 10) {
    console.log(i)
    i++
}
i = 0;
do {
    console.log(i)
    i++
} while (i < 10)

// Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let i = 10; i < 0; i--) {
    console.log(i)
}
i = 10;
while (i > 0) {
    console.log(i)
    i--
}
i = 10;
do {
    console.log(i)
    i--
} while (i > 0)

// Use for loop to iterate from 0 to 100 and print only even numbers
for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

// Use for loop to iterate from 0 to 100 and print only odd numbers
for (let i = 0; i < 100; i++) {
    if (i % 2 != 0) {
        console.log(i)
    }
}

// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0
for (let i = 0; i < 100; i++) {
    sum += i
}
console.log(sum)

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let evenSum = 0
let oddSum = 0
for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        evenSum += i
    } else {
        oddSum += i
    }
}
console.log(evenSum)
console.log(oddSum)