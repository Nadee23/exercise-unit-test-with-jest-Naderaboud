//Ejercicio 6
const { sum, fromEuroToDollar, fromYenToPound, fromDollarToYen } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);

});


test("One euro should be 1.07 dollars", () => {
    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBeCloseTo(3.745);
})


test("One dollar should be 146,261 yens", () => {
    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(3)).toBeCloseTo(3 * 146.261);
})

test("One yen should be 0.00556 pounds", () => {
    // Hago mi comparación (la prueba)
    expect(fromYenToPound(100000)).toBeCloseTo(100000 * 0.00556, 0);
})
