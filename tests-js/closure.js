// function counter()
// {
//     let count = 0;

//     return function() {
//         count++;
//         console.log(count);
//     };
// }

// const countIncrementer = counter();

// countIncrementer();
// countIncrementer();
// countIncrementer();
// countIncrementer();

/* In JavaScript, a closure is created when a function is defined 
within another function, allowing the inner function to access the 
outer function's variables and parameters. This enables the inner 
function to "close over" or capture the state of the outer function, 
even after the outer function has finished executing. Closures are a 
powerful and flexible feature in JavaScript and have various practical 
use cases.*/

/* lexical Scoping */
// Lexical scoping: is a way of defining how VARIABLES 
// and FUNCTIONS interact based on their position within 
// the code.
function init() {
    let name = 'Firefox';

    function displayName() {
        console.log(name);
    }
    displayName();
}

// displayName(); // this is thrown an error [is not defined]
init();