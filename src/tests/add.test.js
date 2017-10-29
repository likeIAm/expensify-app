const add = (a, b) => a + b;
const generateGreetings = (name = 'Anonymous') => `Hello ${name}!`;

test('shold add two numbers', () => {
    const result = add(3, 4);
    // if (result !== 7) {
    //     throw new Error(`You added 3 and 4. The result was ${result}. Expect 7`);
    // }
    expect(result).toBe(7);
});

test('should generate greeting from name', () => {
    const result = generateGreetings('Luca');

    expect(result).toBe('Hello Luca!');
});

test('should generate greetings for no name', () => {
    const result = generateGreetings();

    expect(result).toBe('Hello Anonymous!');
})