// simple testing
const sum = (a, b) => a + b;
const substract = (a, b) => a - b;

let result = sum(3, 7);
let expected = 10;
// if (result !== expected) {
//     throw new Error(`${result} is not equal to ${expected}`)
// }

expected(result, expected);

result = substract(7, 3);
expected = 4;

// if (result !== expected) {
//     throw new Error(`${result} is not equal to ${expected}`)
// }

expected(result, expected);

function expected(actual, expected) {
    if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
    }
}
