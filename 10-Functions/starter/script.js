'use strict';

// const bookings = [];

// const createBooking = function(flightNum, numPassenger = 1, price = 199 * numPassenger) {
//     // ES5
//     // numPassenger = numPassenger || 1;

//     const booking = {
//         flightNum,
//         numPassenger,
//         price
//     }
//     console.log(booking);
//     bookings.push(booking);
// }

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 1000);

// const flight = 'LH234';
// const jonas = {
//     name: 'Jonas Schmedtmann',
//     passport: 234834534
// }

// const checkIn = function(flightNum, passenger) {
//     flightNum = 'LH999';
//     passenger.name = 'Mr.' + passenger.name;
//     if (passenger.passport === 234834534) {
//         alert('Check in')
//     } else {
//         alert('Wrong passport')
//     }
// }

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const newPassport = function(person) {
//     person.passport = Math.trunc(Math.random() + 1000000000000);
// }

// newPassport(jonas);
// checkIn(flight, jonas);

// first callback function
// const oneWord = function(str) {
//     return str.replaceAll(' ', '').toLowerCase();
// }
// // second callback funciton
// const upperFirstWord = function(str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher-order function
// const transformer = function(str, fn) {
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`)
// 
//     console.log(`Transformed by: ${fn.name}`);
// }

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// // third callback function
// const high5 = function() {
//     console.log(':))');
// }
// // Higher-order function
// document.body.addEventListener('click', high5);

// ['Jonas', 'Martha', 'Adam'].forEach(high5);

// const greet = function(greeting) {
//     return function(name) {
//         console.log(`${greeting} ${name}`);
//     }
// }

// const greet = greeting => {
//     return name => {
//         console.log(`${greeting} ${name}`);
//     };
// };

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');

// greet('Hello')('Jonas');

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
    }
};

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

// lufthansa.book(239, 'Jonas Schmedtmann');
// lufthansa.book(635, 'John Smith');
// console.log(lufthansa);

// // this of regular function, it just a copy
// const book = lufthansa.book;

// // Does not work
// // book(23, 'Sarah Williams');

// // call() method
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);
// book.call(lufthansa, 333, 'Harry Poster');

// // apply() method
// const flightData = [583, 'Geoge Coper'];
// book.apply(eurowings, flightData);
// console.log(eurowings);

// // Same as apply() method
// book.call(eurowings, ...flightData);

// // bind() method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);

bookEW(34, 'Steven Willi');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Jonas');
// bookEW23('Martha');

// lufthansa.planes = 300;
// lufthansa.buyPlane = function() {
//     console.log(this);
//     this.planes++;
//     console.log(this.planes);
// }

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial application: preset parameters
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax, 10, 200);

// // const addVAT = (value, rate = 0.23) => addTax(rate, value);
// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(100));

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = prompt(`${this.question}\n${this.options.join('\n')}`);
//     if (answer < 4 && answer >= 0) ++this.answers[answer];
//     this.displayResults();
//   },
//   displayResults() {
//     const type = prompt('What type do you want to see ?');
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// (function() {
//     console.log('This will never run again');
// })();

// (() => console.log('This will never run again'))();

// const secureBooking = function() {
//     let passengerCount = 0;

//     return function() {
//         passengerCount++;
//         console.log(`${passengerCount} passengers`);
//     }
// }

// const booker = secureBooking();
// booker();
// booker();
// booker();

// let f;
// const g = function() {
//     const a = 23;
//     f = function() {
//         console.log(a * 2);
//     }
// }

// const h = function() {
//     const b = 777;
//     f = function() {
//         console.log(b * 2);
//     }
// }

// g();
// f();

// // re-assign f function
// h();
// f();
// console.dir(f);

// const boardPassengers = function(n, wait) {
//     const perGroup = n / 3;

//     setTimeout(function(){
//         console.log(`We are now boarding all ${n}`);
//         console.log(`There are 3 groups, each with ${perGroup} passengers`);
//     }, wait * 1000);

//     console.log(`Will start boarding in ${wait} seconds`);
// };

// boardPassengers(180, 3);

(function() {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    header.addEventListener('click', function(){
        this.style.color = 'blue';
    })
})();