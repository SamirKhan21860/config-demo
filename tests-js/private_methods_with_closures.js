const counter = (function () {
    let privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }

    return {
        increment() {
            changeBy(1);
        },

        decrement() {
            changeBy(-1);
        },

        value() {
            return privateCounter;
        },
    };
})();

console.log(counter.value()); // value() methods is inside the obj
counter.increment();
counter.increment();
console.log(counter.value());
counter.decrement();
console.log(counter.value());
/* without anonymous functions */
// const e = 10;
// function sum(a) {
//     return function sum2(b) {
//         return function sum3(c) {
//             // outer functions scope
//             return function sum4(d) {
//                 // local scope
//                 return a + b + c + d + e;
//             };
//         };
//     };
// }

// const sum2 = sum(1);
// const sum3 = sum2(2);
// const sum4 = sum3(3);
// const result = sum4(4);
// console.log(result);