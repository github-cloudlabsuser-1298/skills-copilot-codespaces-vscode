class Calculator {
    constructor() {
        this.value = 0;
    }

    add(number) {
        this.value += number;
        return this;
    }

    subtract(number) {
        this.value -= number;
        return this;
    }

    multiply(number) {
        this.value *= number;
        return this;
    }

    divide(number) {
        if (number === 0) {
            console.error("Cannot divide by zero");
            return this;
        }
        this.value /= number;
        return this;
    }

    clear() {
        this.value = 0;
        return this;
    }

    getResult() {
        return this.value;
    }
}

// Example usage:
const calc = new Calculator();
calc.add(10).subtract(2).multiply(3).divide(4);
console.log(calc.getResult()); // Output: 6