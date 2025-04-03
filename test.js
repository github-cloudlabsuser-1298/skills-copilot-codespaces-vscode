// Function to perform calculations
function calculator() {
    console.log("Welcome to the Calculator!");
    console.log("Options:");
    console.log("1. Add");
    console.log("2. Subtract");
    console.log("3. Multiply");
    console.log("4. Divide");
    console.log("5. Exit");

    while (true) {
        // Get user choice
        const choice = parseInt(prompt("Enter your choice (1-5):"));

        if (choice === 5) {
            console.log("Exiting the calculator. Goodbye!");
            break;
        }

        if (choice < 1 || choice > 5 || isNaN(choice)) {
            console.log("Invalid choice. Please select a number between 1 and 5.");
            continue;
        }

        // Get numbers from the user
        const num1 = parseFloat(prompt("Enter the first number:"));
        const num2 = parseFloat(prompt("Enter the second number:"));

        if (isNaN(num1) || isNaN(num2)) {
            console.log("Invalid input. Please enter valid numbers.");
            continue;
        }

        // Perform the selected operation
        let result;
        switch (choice) {
            case 1:
                result = num1 + num2;
                console.log(`${num1} + ${num2} = ${result}`);
                break;
            case 2:
                result = num1 - num2;
                console.log(`${num1} - ${num2} = ${result}`);
                break;
            case 3:
                result = num1 * num2;
                console.log(`${num1} * ${num2} = ${result}`);
                break;
            case 4:
                if (num2 === 0) {
                    console.log("Error: Division by zero is not allowed.");
                } else {
                    result = num1 / num2;
                    console.log(`${num1} / ${num2} = ${result}`);
                }
                break;
            default:
                console.log("Invalid choice. Please try again.");
                break;
        }
    }
}

// Run the calculator
calculator();