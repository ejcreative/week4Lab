/*
  Copyright (c) 2023 Promineo Tech
  Author:  Promineo Tech Academic Team
  Subject:  Variables and Operations Lab
  FE JS1 Lab
*/

/** Key Terms:
 *  JavaScript
 *  GUI (Graphic User Interface)
 *  CLI (Command Line Interface)
 *  Variable
 *  Data Types:
 *   - String
 *   - Number
 *   - Boolean
 *   - Array
 *   - Undefined
 *   - Object
 *   - BigInt
 *   - Null
 *   - Symbol
 *  Method
 *  Git
 *  Source Control
 *  Operators
 *  console.log()
 * 
*/

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so. 
// Read the comments and add your code where it is specified for each question. 
/* ----------------------------------------------------- */

/*-------------------------------------------------------*/

console.log(`--------------------------
Question 1. Creating & 'console.log()'ing variables \n`);
console.log("Hello I am putting in Alien Romulus.")

/**
 * Instruction: Create a variable for each step, then print that variable 
 *              to the console in the correct section.
 *
 * Step 1: Create a variable to hold the quantity of available seats left on a flight.
 * Step 2: Create a variable to hold the cost of groceries at checkout
 * Step 3: Create a variable to hold a person's middle initial
 * Step 4: Is it Hot Outside?
 *         Create a variable to hold a boolean, true if it's hot outside, false if it's not hot outside.
 * Step 5: Create a variable to hold a customer's first name.
 * Step 6: Create a variable to hold a street address.
 * ↓ YOUR CODE HERE ↓ */

// For all the variables below, Camel Case is used
// Named variable to availableFlightSeats to make it more descriptive.
// Added a space after the string to give the variable space. 
console.log("Step 1:  Number of Seats on a Plane");
var availableFlightSeats = 5;
console.log("The number of seats left on this flight is " + availableFlightSeats)

// Named variable to costOfGroceries to make it more descriptive.
// Added a space after the string to give the variable space. 
console.log("Step 2:  Cost of Groceries");
var costOfGroceries = 23.75
console.log("The cost of grocerias is " + costOfGroceries)

// Named variable to middleInitial to make it more descriptive.
// Added a space after the string to give the variable space. 
console.log("Step 3:  Middle Initial");
var middleInitial = "H"
console.log("My middle initial is " + middleInitial)

// Named variable to isItHotOutside to make it more descriptive.
// Added a space after the string to give the variable space.
// Made variable "false", because it is definitely not hot outside. 
console.log("Step 4:  Is it Hot Outside?");
var isItHotOutside = false
console.log("Is it hot outside? " + isItHotOutside)

// Named variable to firstNameCustomer to make it more descriptive.
// Added a space after the string to give the variable space. 
console.log("Step 5:  First Name");
var firstNameCustomer = "Greg"
console.log("The customer's first name is " + firstNameCustomer)

// Named variable to streetAddress to make it more descriptive.
// Added a space after the string to give the variable space. 
console.log("Step 6:  Street Address");
var streetAddress = "9303 Lyon Drive, Hill Valley, CA 95420"
console.log("Marty Mcfly's street address is " + streetAddress)
/*-------------------------------------------------------*/

console.log(`--------------------------
Question 2. Creating & 'console.log()'ing variables \n`);

 

/** 
 * Instruction: Use the variables we just created to solve the problems below.
 *              Print your answers to the console.
 * 
 *
 * */

    console.log('Remove Plane Seats:')
//	A customer booked 2 plane seats. Remove 2 seats from the available seats variable
//  ↓ YOUR CODE HERE ↓
console.log("A customer booked 2 seats. There are now only " + (availableFlightSeats - 2) + " seats left.")

    console.log('Buy a Candy Bar:')
//	Impulse candy bar purchase! Add 2.15 to the grocery total
//  ↓ YOUR CODE HERE ↓
console.log("New cost of groceries is now " + (costOfGroceries + 2.15))

    console.log('Fix a Birth Certificate:')
//	A birth certificate was printed incorrectly, change the middle initial to something else
//  ↓ YOUR CODE HERE ↓
middleInitial = "D"
console.log("My bad. The middle initial is actually " + middleInitial)

    console.log('Changing Seasons:')
//	The season has changed, update the hot outside variable	to be opposite of what it was
//  ↓ YOUR CODE HERE ↓
isItHotOutside = !isItHotOutside
console.log("Seasons changed. It is now hot outside " + isItHotOutside)

console.log('Full Name:')
//	Create a new variable called full name using the customer's
//  first name, the middle initial, and a last name of your choice
//  ↓ YOUR CODE HERE ↓
var fullName = firstNameCustomer + " " + middleInitial + " " + "McFly"
console.log("The customer's full name is " + fullName)

    console.log('Introduce a Customer:')
//	Print a line to the console that introduces the customer 
//	including the name, and saying that they live at the address variable
//  ↓ YOUR CODE HERE ↓
console.log("Let me introduce you to a new customer. His name is " + fullName + "." + " They live at " + streetAddress)



    console.log('-----------Finished------------')