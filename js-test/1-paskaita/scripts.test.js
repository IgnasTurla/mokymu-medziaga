const [suma, atimti, daugyba] = require('./scripts');

test('funkcija suma grazina 5', () => {
    expect(suma(2,3)).toBe(5);
});

test('funkcija suma teisingai skaiciuoja', () => {
    expect(suma(2,3)).not.toBe(4);
});