async function test(title, callback) {
    try {
        await callback()
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

global.test = test;
global.expect = expect;