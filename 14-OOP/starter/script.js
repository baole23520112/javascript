'use strict';

// // arrow function don't have this keyword
// const Person = function(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//     // console.log(this);
// };

// const jonas = new Person('Jonas', 1911);
// // 1. New {} is created
// // 2. function is called, this = {}
// // {} linked to prototype
// // 4. function automatically return {}

// const matilda = new Person('Matilda', 2018);

// const jay = 'Jay';

// // console.log(matilda instanceof Person);
// // console.log(jay instanceof Person);

// // prototype

// // inherited method 
// Person.prototype.calcAge = function() {
//     console.log(2037 - this.birthYear);
// }

// console.log(Person.prototype); // prototype

// console.log(jonas.__proto__); // prototype
// console.log(jonas.__proto__ === Person.prototype); // true

// console.log(Person.prototype.isPrototypeOf(jonas)); // true
// console.log(Person.prototype.isPrototypeOf(Person)); // false

// // inherited property
// Person.prototype.species = 'Homo Sapiens';

// console.log(jonas.hasOwnProperty('firstName')); // true
// console.log(jonas.hasOwnProperty('species')); // false

// console.log(jonas.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [1, 3, 4, 2, 1, 5];
// console.log(arr.__proto__ === Array.prototype);

/*
1. Use a constructor function to implement a 'Car'. A car has a 'make' and a 
'speed' property. The 'speed' property is the current speed of the car in 
km/h 
2. Implement an 'accelerate' method that will increase the car's speed by 10, 
and log the new speed to the console 
3. Implement a 'brake' method that will decrease the car's speed by 5, and log 
the new speed to the console 
4. Create 2 'Car' objects and experiment with calling 'accelerate' and 
'brake' multiple times on each of them 
Test data: 
§ Data car 1: 'BMW' going at 120 km/h 
§ Data car 2: 'Mercedes' going at 95 km/h
*/

// const Car = function(make, speed) {
//     this.make = make;
//     this.speed = speed;
// }

// Car.prototype.accelerate = function() {
//     this.speed += 10;
//     console.log(this.speed);
// }

// Car.prototype.brake = function() {
//     this.speed -= 5;
//     console.log(this.speed);
// }

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);
// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();

// mercedes.accelerate();
// mercedes.brake();

// class expression
// const PersonCl = class {}

// class declaration
// class PersonCl {
//     constructor(firstName, birth) {
//         this.firstName = firstName;
//         this.birth = birth;
//     }

//     // instance method
//     // methods will be added to .prototype property
//     calcAge() {
//         console.log(2037 - this.birth);
//     }

//     greet() {
//         console.log(`Hey ${this.firstName}`)
//     }

//     get age() {
//         return 2037 - this.birth;
//     }

//     set fullName(name) {
//         if (name.includes(' ')) this._fullname = name;
//         else alert(`${name} is not a full name`);
//     }

//     get fullName() {
//         return this._fullname;
//     }

//     // static method
//     static hey() {
//         console.log(`Hey there`);
//         console.log(this);
//     }
// }

// not available in instances, just in class
// PersonCl.hey();

// const jessia = new PersonCl('Jessian', 1996);
// console.log(jessia);
// jessia.calcAge();
// console.log(jessia.__proto__ === PersonCl.prototype);

// // PersonCl.prototype.greet = function() {
// //     console.log(`Hey ${this.firstName}`)
// // }

// jessia.greet();

// // 1. Classes are NOT hoisted
// // 2. Class are first-class citizes
// // 3. Classes are excuted in strict mode

// const account = {
//     owner: 'Jonas',
//     movements: [200, 500, 200, 100],

//     get latest() {
//         return this.movements.slice(-1).pop();
//     },

//     set latest(mov) {
//         this.movements.push(mov);
//     }
// }

// console.log(account.latest);
// account.latest = 50;
// console.log(account.latest);

// Person.hey = function() {
//     console.log('Hey there');
//     console.log(this);
// }

// Person.hey();

// const PersonProto = {
//     calcAge() {
//         console.log(2037 - this.birth);
//     }
// }

// const steven = Object.create(PersonProto);
// console.log(steven); // empty object
// steven.name = 'Steven';
// steven.birth = 1999;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

/*
1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl') 
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide 
by 1.6) 
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but 
converts it to km/h before storing the value, by multiplying the input by 1.6) 
4. Create a new car and experiment with the 'accelerate' and 'brake' 
methods, and with the getter and setter. 
Test data: 
§ Data car 1: 'Ford' going at 120 km/h
*/

// class CarCl {
//     constructor(make, speed) {
//         this.make = make;
//         this.speed = speed;
//     }

//     accelerate() {
//         this.speed += 10;
//         console.log(this.speed);
//     }

//     brake() {
//         this.speed -= 5;
//         console.log(this.speed);
//     }

//     get speedUS() {
//         return this.speed / 1.6;
//     }

//     set speedUS(speed) {
//         this.speed = speed * 1.6;
//     }
// }

// const car = new CarCl('BMW', 50);
// car.accelerate();
// car.brake();
// console.log(car.speedUS);
// car.speedUS = 10;
// console.log(car.speedUS);

// parent constructor function
const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

// inherited method
Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
}

// child constructor function
const Student = function(firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function() {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();