// Primitives
// What is a Symbol ?
// Notion page Link: https://www.notion.so/Symbol-835ff4527f0643bc92bc048835a6b835

const aSymbol = Symbol('a Symbol');

const person = {
    name1: 'Bob',
    age: 11
};
// Symbol primitive is use to avoid property name collisions
//Prevent accidental property overrides.
const [name1, age] = [Symbol('name1'), Symbol('age')];
person[name1] = 'Alice';
person[age] = 30;

console.log(person[age]); // Output: 30
console.log(person.age); // Output: 11
// { name1: 'Bob', age: 11, [Symbol(name1)]: 'Alice', [Symbol(age)]: 30 }
console.log(person);

/* Creating Private Properties and Methods: */
// const nameSymbol = Symbol();

// class Person {
//     constructor(name) {
//         this[nameSymbol] = name; // Private property
//         this.age = 30;          // Accessible property
//     }
//     getName() {
//         return this[nameSymbol];
//     }
// }

// const user = new Person('Qasim');
// console.log(user.getName());
// console.log(user.age);

/*  */

