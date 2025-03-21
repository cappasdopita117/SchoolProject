// Student class definition
class Student {
    constructor(public name: string) {}

    greetStudent() {
        console.log(`Hello, ${this.name}!`);
    }
}

// Main method to demonstrate creating and using students
const student1 = new Student("Alice");
student1.greetStudent();
