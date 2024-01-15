// High Order Functions and Callback
function add(a, b, cb) {
    let result = a + b;
    cb(result); // this function wait and the complier moves
    //This callback is asynchronous, meaning it doesn't block the execution of the next line of code.
    // to the return arrow func which output 500. This is because 
    // of the asynchronous behaviour in callback.
    return () => console.log(result);
}

// function showResult(result) {
//     console.log(result);
// }

let adder = add(2, 4, () => {});
let adder1 = add(400, 100, function (result) {
    console.log(result);
});

adder();
adder1();
adder();

// add(2, 4, (val) => console.log(val));
// add(400, 10, (res) => console.log(res));

// add(2, 4, showResult);

// add(2, 4, function (value) {
//     console.log(value);
// });