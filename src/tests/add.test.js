const add = (a, b) => a + b + 1;
test('shold add two numbers', () => {
    const result = add(3, 4);

    // if (result !== 7) {
    //     throw new Error(`You added 3 and 4. The result was ${result}. Expect 7`);
    // }

    expect(result).toBe(7);
});