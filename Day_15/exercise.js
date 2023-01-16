// Exercises : Level 1

// Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
    constructor(name, age, color, legs) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
    getInfo() {
        const info = "I am " + this.name;
        return info
    }
}

// Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal {

}
class Cat extends Animal {

}


// Exercises : Level 2

// Override the method you create in Animal class
class mammel extends Animal {
    getInfo() {
        const info = "I am a memmal"
        return info
    }
}