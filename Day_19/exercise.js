// Exercises : Level 1

// Create a closure which has one inner function
function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++
        return count
    }

    return innerFunction
}
const innerFunc = outerFunction()
console.log(innerFunc())


// Exercises: Level 2

// Create a closure which has three inner functions
function outerFunction() {
    let count = 0;
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }
    function multiplyTwo() {
        count *= 2
        return count
    }

    return {
        plusOne: plusOne(),
        minusOne: minusOne(),
        multiplyTwo: multiplyTwo()
    }
}
const innerFuncs = outerFunction()
console.log(innerFuncs.plusOne)
console.log(innerFuncs.minusOne)
console.log(innerFuncs.multiplyTwo)