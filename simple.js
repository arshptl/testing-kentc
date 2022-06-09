// simple testing
const sum = (a, b) => a + b;
const substract = (a, b) => a - b;



// expect(result).toBe(expected);


test('sum adds numbers', () => {
    const result = sum(3, 7);
    const expected = 10;
    expect(result).toBe(expected);
})


test('subtract subtracts numbers', () => {
    const result = substract(7, 3);
    const expected = 4;
    expect(result).toBe(expected);
})

function test(title, callback) {
    try {
        callback()
        console.log(`OKAY! ${title}`)
    } catch (error) {
        console.log(`NO! ${title}`);
        console.log(error);
    }
}

function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`${actual} is not equal to ${expected}`);
            }
        }
    }
}
