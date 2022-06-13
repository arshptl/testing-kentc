const { Asyncsum, Asyncsubstract } = require('../mathFunc');

test('sum adds numbers', async () => {
    const result = await Asyncsum(3, 7);
    const expected = 10;
    expect(result).toBe(expected);
})


test('subtract subtracts numbers', async () => {
    const result = await Asyncsubstract(7, 3);
    const expected = 4;
    expect(result).toBe(expected);
})


