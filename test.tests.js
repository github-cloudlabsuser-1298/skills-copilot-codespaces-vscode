const Calculator = require('./test.js');

// FILE: test.tests.test.js


describe('Calculator', () => {
    let calc;

    beforeEach(() => {
        calc = new Calculator();
    });

    test('should initialize with value 0', () => {
        expect(calc.getResult()).toBe(0);
    });

    test('should add numbers correctly', () => {
        calc.add(5);
        expect(calc.getResult()).toBe(5);
    });

    test('should subtract numbers correctly', () => {
        calc.add(10).subtract(3);
        expect(calc.getResult()).toBe(7);
    });

    test('should multiply numbers correctly', () => {
        calc.add(2).multiply(3);
        expect(calc.getResult()).toBe(6);
    });

    test('should divide numbers correctly', () => {
        calc.add(8).divide(2);
        expect(calc.getResult()).toBe(4);
    });

    test('should not divide by zero', () => {
        console.error = jest.fn();
        calc.add(8).divide(0);
        expect(console.error).toHaveBeenCalledWith("Cannot divide by zero");
        expect(calc.getResult()).toBe(8);
    });

    test('should clear the value', () => {
        calc.add(10).clear();
        expect(calc.getResult()).toBe(0);
    });
});