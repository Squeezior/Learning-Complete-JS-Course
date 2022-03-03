'use strict';

/*
/////////////////////////////////////////
// Default Parameters
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000); // we can skip the argument using undefined. Setting it to undefined is same as not setting it at all.
*/

/*
/////////////////////////////////////////
// How Passing Arguments Works: Value vs. Reference

const flight = 'LH234';
const matt = {
  name: 'Matt Kowalski',
  passport: 24738238721,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24738238721) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, matt);
// console.log(flight);
// console.log(matt);

// // Is same as doing...
// const flightNum = flight; // value on the call stack is copied
// const passenger = matt; // we copy just the reference to the object in memory heap, they both point to the same object now, so we can manipulate passenger and it'll actually manipulate matt object.

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(matt);
checkIn(flight, matt);
// JS does not have pass by reference, it's always by value
// pass by reference in JS is just passing the value of memory address, we pass the reference to the function, not BY function.
*/

/*
/////////////////////////////////////////
// First-Class and Higher-Order functions

// Functions are simply values
// functions are another type of objects in JS, since objects are values, functions are values too.
// And since functions are values there are a bunch of interesting things we can do with functions, like storing them in variables, or object properties.
// There are function methods, since functions are objects.

// Higher order functions:

// Function that receives another function
// const greet = () => console.log('Hey Matt');
// btnClose.addEventListener('click', greet);
// greet function is a Callback function

// Function that returns new function:
// function count() {
//   let counter = 0;
//   return function () {
//     counter++;
//   };
// }

// First-Class functions is just a feature that a programming language either has or not. It just means that all functions are values and that's it. There are no First-Class functions in practice.
// There ARE Higher-Order functions in practice.
*/
